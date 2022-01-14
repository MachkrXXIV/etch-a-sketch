const DEFAULT_COLOR = "33333"
const DEFAULT_SIZE = 16;


const body = document.querySelector("body");
const gridCont = document.querySelector(".grid-container");


function makeGrid(size) {
  for (let c = 0; c < size * size; c++) {
    const box = document.createElement("div");
    gridCont.appendChild(box);

    gridCont.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
  let gridCells = gridCont.querySelectorAll("div");
  gridCells.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  })
}

function paint(cell) {
  cell.style.backgroundColor = "black";
}

function resetCanvas() {
  allCells.classList.remove("painted");
}

// Main
makeGrid(DEFAULT_SIZE);
//gridCont.forEach(cell => 
