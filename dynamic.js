// Generating 16 by 16 grid
function generateGrid() {
  let gridSize;
  // do {
  //   gridSize = Number(prompt('what grid size do you want to have?'));
  // } while (gridSize > 100);
  gridSize = 16; //DELETE THIS AFTERWARDS THIS IS JUST FOR CONVENIENCE TO WORK ON THE GRID ITSELF!N
  const grid = document.querySelector('.container');
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    const gridElementList = [];
    for (let i = 0; i < gridSize; i++) {
      let gridEl = document.createElement('div');
      gridEl.classList.add('square');
      gridElementList.push(gridEl);
    }
    gridElementList.forEach((element) => gridRow.append(element));
    grid.append(gridRow);
    gridRow.classList.add('inner-container');
  }
  return grid;
}

function displayGrid(element, color) {
  document.querySelector('body').appendChild(element);
}

// Change styling to black for grid element this is hovered over.
function ChangeBGColorOnHover(grid, color) {
  grid.addEventListener('mousedown', () => {
    const gridRows = grid.children;
    for (let row of gridRows) {
      let gridRowElements = Array.from(row.children);
      //adding event listener to every element
      gridRowElements.forEach((element) => {
        element.addEventListener('mouseover', (event) => {
          element.style.backgroundColor = color;
        });
      });
    }
  });
  grid.addEventListener('mouseup', () => {
    let gridRowElements = Array.from(grid.children);
    console.log(gridRowElements);
  });
}

function clearGrid() {
  let gridRows = Array.from(grid.children);
  gridRows.forEach((gridRow) => {
    Array.from(gridRow.children).forEach((gridRowElement) => {
      gridRowElement.style.backgroundColor = 'transparent';
    });
  });
}

function randomColor() {
  const rValue = Math.floor(Math.random() * 256);
  const gValue = Math.floor(Math.random() * 256);
  const bValue = Math.floor(Math.random() * 256);
  const aValue = (Math.random() * 1).toFixed(1);
  const color = `rgba(${rValue}, ${gValue}, ${bValue}, ${aValue})`;
  console.log(color); //checking the rgba values in console log.
  ChangeBGColorOnHover(grid, color);
}

// MAIN PROGRAM
const grid = generateGrid();
const eraseColorBtn = document.querySelector('#erase-btn');
const clearBtn = document.querySelector('#clear-btn');
const colorBtn = document.querySelector('#color-btn');
const colorInput = document.querySelector('#color-input');
const randomBtn = document.querySelector('#random-btn');

ChangeBGColorOnHover(grid, 'black'); //standard color is black.
//erase styling of grid element.
eraseColorBtn.addEventListener('click', (e) => {
  ChangeBGColorOnHover(grid, 'transparent');
});
// clear whole grid
clearBtn.addEventListener('click', clearGrid);

// choose your own color
colorBtn.addEventListener('click', () => colorInput.click());
colorInput.addEventListener('input', (e) => {
  let color = e.target.value;
  ChangeBGColorOnHover(grid, color);
});

randomBtn.addEventListener('click', randomColor);
