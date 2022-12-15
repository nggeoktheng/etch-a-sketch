const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.querySelector('.resetBtn');
const eraserBtn = document.querySelector('.eraseBtn');
const userGrid = document.getElementById('userGrid');
const selectedColor = document.getElementById('colorpicker');

let color = 'black';

function makeGrid(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let existingGrids = gridContainer.querySelectorAll('div');
    existingGrids.forEach(div => div.remove());
    
    let gridBoxes = num * num;
    for (let i = 0; i < gridBoxes; i++) {
        let grid = document.createElement('div');
        grid.className = 'gridItem';
        grid.style.backgroundColor = 'white';
        gridContainer.append(grid);
        grid.addEventListener('mouseenter', coloring);
    }
}

makeGrid(16);

userGrid.addEventListener('change', userGridInput);

function userGridInput() {
    let userInput = userGrid.value;

    if (userInput > 100) {
        alert('Please input "number less than 101"!');
        return;
    }
    makeGrid(userInput);
}

function coloring(e) {
    e.target.style.backgroundColor = color;
}

resetBtn.addEventListener('click', reset);

function reset() {
    let grids = gridContainer.querySelectorAll('div');
    grids.forEach(grid => grid.style.backgroundColor = 'white');
    userGrid.value = '16';
    selectedColor.value = '#7bb7cc';
    makeGrid(16);
}

selectedColor.addEventListener('input', changeColor);

function changeColor(e) {
    color = e.target.value;
}

eraserBtn.addEventListener('click', eraseIt);

function eraseIt() {
    color = 'white';
}