// variables

let gridSize = 16;
let blackBtn = document.querySelector(".change-black");
let toggleGridBtn = document.querySelector(".toggle-grid");
let toggleGrid = false;

// function delcarations

createGrid(gridSize);
changeColorBlack();

// functions

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function createGrid(size) {
  let gridContainer = document.querySelector(".grid-container");
  let totalCells = size * size;

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < totalCells; i++) {
    let gridCell = document.createElement("div");

    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }

  resetGrid();
}

function changeColorBlack(e) {
  let gridCell = document.querySelectorAll(".grid-cell");

  gridCell.forEach((cell) =>
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    })
  );
}

function changeColorWhite(e) {
  let gridCell = document.querySelectorAll(".grid-cell");

  gridCell.forEach((cell) =>
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    })
  );
}

function changeColorRandom(e) {
  let gridCell = document.querySelectorAll(".grid-cell");

  gridCell.forEach((cell) =>
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${getRandomInt(
        0,
        255
      )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    })
  );
}

function resetGrid(e) {
  let gridCell = document.querySelectorAll(".grid-cell");

  gridCell.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function changeGridSize() {
  let gridCell = document.querySelectorAll(".grid-cell");
  let newSize = document.querySelector(".change-size-text");

  gridCell.forEach((cell) => {
    cell.remove();
  });

  createGrid(newSize.value);
  changeColorBlack();
}

function handleToggleGrid(e) {
  let gridCell = document.querySelectorAll(".grid-cell");

  if (toggleGrid === false) {
    gridCell.forEach((cell) => {
      cell.style.border = "0.5px solid white";
    });

    console.log(toggleGridBtn.textContent);
    toggleGridBtn.textContent = "grid: off";
    toggleGrid = true;
  } else if (toggleGrid === true) {
    gridCell.forEach((cell) => {
      cell.style.border = "0.5px solid rgb(215, 215, 215)";
    });

    toggleGridBtn.textContent = "grid: on";
    toggleGrid = false;
  }
}

toggleGridBtn.addEventListener("click", handleToggleGrid);
