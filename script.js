const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.querySelector('.resetBtn');
const eraserBtn = document.querySelector('.eraseBtn');
const enterBtn = document.getElementById('enterBtn');
let userGrid = document.getElementById('userGrid');
let selectedColor = document.getElementById('colorpicker');

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
        const gridItems = document.querySelectorAll('.gridItem');
        gridItems.forEach(item => item.addEventListener('mouseenter', hovering));
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

function hovering(e) {
    e.target.style.backgroundColor = 'black';
}

resetBtn.addEventListener('click', reset);

function reset() {
    let grids = gridContainer.querySelectorAll('div');
    grids.forEach(grid => grid.style.backgroundColor = 'white');
    userGrid.value = '16';
    makeGrid(16);
}

// based on what color the user selects
selectedColor.addEventListener('input', e => {
    let grids = gridContainer.querySelectorAll('div');
    grids.forEach(grid => grid.style.backgroundColor = selectedColor.value);
    console.log(selectedColor.value, gridContainer, grids)
})