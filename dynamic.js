// Generating 16 by 16 grid
function generateGrid() {
  const grid = document.querySelector('.container');
  for (let i = 0; i < 16; i++) {
    let gridRow = document.createElement('div');
    const gridElementList = [];
    for (let i = 0; i < 16; i++) {
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
function convertColorOnHover(grid) {
  const gridRows = grid.children;
  for (let row of gridRows) {
    gridRowElements = Array.from(row.children);
    //adding event listener to every element
    gridRowElements.forEach((element) => {
      element.addEventListener(
        'mouseover',
        (event) => (element.style.backgroundColor = 'black')
      );
    });
  }
}

// MAIN PROGRAM

convertColorOnHover(generateGrid());
