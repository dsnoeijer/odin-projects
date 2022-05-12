root = document.querySelector(".root");

container = document.createElement('div');

const style = document.createElement('style')

let gridSize = 0;

const setGridSize = (gridSize) => {
    if (gridSize === 0) {
        console.log(gridSize);
        style.innerHTML = `
    .container {
        width: 600px;
        height: 600px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        margin: auto;
    }
    .square {
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }
    `
        for (let i = 0; i < 16; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
        container.classList.add('container');

    } else {

        console.log(`beep ${gridSize}`)
        style.innerHTML = `
        .container {
            width: 600px;
            height: 600px;
            display: grid;
            grid-template-columns: repeat(${gridSize}, 1fr);
            grid-template-rows: repeat(${gridSize}, 1fr);
            margin: auto;
        }
        .square {
            width: 100%;
            height: 100%;
            border: 1px solid black;
        }
        `
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        for (let i = 0; i < gridSize * gridSize; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

const getUserGridSize = () => {
    gridSize = prompt("Please enter a grid size");
    if (gridSize != null) {
        setGridSize(gridSize);
    } else {
        setGridSize(0);
    }
}

setGridSize(gridSize);

root.appendChild(container)
document.head.appendChild(style);

getSquare = document.querySelector('.container');

getSquare.addEventListener("mouseover", (e) => {
    if (e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    } else {
        e.target.style.backgroundColor = 'rgb(0, 0, 0)';
    }
});