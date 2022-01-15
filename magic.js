const DEFAULT_COLOR = "0, 0%, 1%";
const DEFAULT_MODE = "marker";
const DEFAULT_SIZE = 16;


const body = document.querySelector("body");
const gridCont = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
const clearBtn = document.querySelector("#clear");
const area = document.querySelector(".area");


function makeGrid(size) {
  for (let c = 0; c < size * size; c++) {
    const box = document.createElement("div");
    gridCont.appendChild(box);

    gridCont.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
  let gridCells = gridCont.querySelectorAll("div"); //creates selector and event listeners for all cells
  gridCells.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
      paint(e);
    });
  })
}

function paint(cell) {
  cell.target.style.backgroundColor = `hsl(${DEFAULT_COLOR})`;
}

function resetCanvas() {
  let gridCells = gridCont.querySelectorAll("div");
  gridCells.forEach(cell => cell.style.backgroundColor = "hsl(0, 100%, 100%)");
}

function changeArea() {
  let gridCells = gridCont.querySelectorAll("div");
  gridCells.forEach(cell => cell.remove());
  area.textContent = `${slider.value} x ${slider.value}`;
  makeGrid(slider.value);
}

// Event listeners
clearBtn.addEventListener("click", () => resetCanvas());
slider.addEventListener("input", () => changeArea());


// Main
makeGrid(DEFAULT_SIZE);
//gridCont.forEach(cell => 
