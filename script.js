const grid = document.querySelector("#grid");
console.log(grid);
// create div cells
createDivs();

function createDivs() {
  for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    console.log(cell);
    console.log(grid);
    cell.classList.add("cell");
    cell.setAttribute("id", `${i}`);
    //   cell.textContent = "square";
    grid.appendChild(cell);
  }
}

//
