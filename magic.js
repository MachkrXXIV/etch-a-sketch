const body = document.querySelector("body");
const gridCont = document.querySelector(".grid-container");

function makeGrid() {
  // columns
  for (let c = 0; c < 16; c++) {
    const box = document.createElement("div");
    box.classList.add("grid-square");
    gridCont.appendChild(box);
    for (let r = 0; r < 16; r++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-square");
      gridCont.appendChild(cell);
    }
  }
}

makeGrid();