const grid = document.querySelector("#grid");
console.log(grid);

createDivs();

const cells = document.getElementsByClassName("cell");
addEventListenerList(cells, "mouseover");

const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", gridPrompt);

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetDivs);

function addEventListenerList(cells, event) {
  for (let i = 0, len = cells.length; i < len; i++) {
    cells[i].addEventListener(event, function () {
      cells[i].style.backgroundColor = "black";
    });
  }
}

// create div cells
function createDivs() {
  for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `${i}`);
    //   cell.textContent = "square";
    grid.appendChild(cell);
  }
}

// Prompt user for desired grid size
function gridPrompt() {
  let gridSize = window.prompt(
    "What size grid do you want to use? Choose a whole number between 1 and 100.",
    16
  );
  let num = parseInt(gridSize);
  return num;
}

// reset background colors of cells
function resetDivs() {
  const divs = document.querySelectorAll(".cell");

  for (let i = 0, len = divs.length; i < len; i++) {
    divs[i].style.backgroundColor = "";
  }
}
