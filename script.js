const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.querySelector('.resetBtn');
const eraserBtn = document.querySelector('.eraseBtn');
const userGrid = document.getElementById('userGrid');
const selectedColor = document.getElementById('colorpicker');

let color = '#51777c';

function makeGrid(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let existingGrids = gridContainer.querySelectorAll('div');
    existingGrids.forEach(div => div.remove());
    
    let gridBoxes = num * num;
    for (let i = 0; i < gridBoxes; i++) {
        let grid = document.createElement('div');
        grid.className = 'gridItem';
        grid.style.backgroundColor = '#9bbabd';
        gridContainer.append(grid);
        grid.addEventListener('mouseenter', coloring);
    }
}

makeGrid(16);

userGrid.addEventListener('change', userGridInput);

function userGridInput() {
    let userInput = userGrid.value;
    color = '#51777c';
    selectedColor.value = '#51777c';

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
    grids.forEach(grid => grid.style.backgroundColor = '#9bbabd');
    color = '#51777c';
    userGrid.value = '16';
    selectedColor.value = '#51777c';
    makeGrid(16);
}

selectedColor.addEventListener('input', changeColor);

function changeColor(e) {
    color = e.target.value;
}

eraserBtn.addEventListener('click', eraseIt);

function eraseIt() {
    color = '#9bbabd';
}

const rgbBtn = document.querySelector('.rgbBtn');

rgbBtn.addEventListener('click', randomRGB);

function randomRGB() {
    const x = Math.floor(Math.random()*256);
    const y = Math.floor(Math.random()*256);
    const z = Math.floor(Math.random()*256);
    color = "rgb("+x+","+y+","+z+")";
}