const gridContainer = document.getElementById('grid-container')
const randColorsButton = document.getElementById('random-colors-button')
const clearButton = document.getElementById('clear-button')
const blackButton = document.getElementById('black-button')
const eraseButton = document.getElementById('erase-button')
const resizeButton = document.getElementById('resize-button')
const gridToggleButton = document.getElementById('grid-toggle-button')
const color = document.getElementById('color')
const gridCells = document.getElementsByClassName("grid-item")

let gridCell
function makeGridItem(numItems) {
    for (let i = 0; i < (numItems); i++) {
      gridCell = document.createElement("div")
      gridCell.className =  "grid-item"
      gridContainer.appendChild(gridCell) 

      gridCell.addEventListener('mouseover', e=> {
          e.target.style.backgroundColor = 'black'
      })
    }   
}

function createGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows)
    gridContainer.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < columns; i++) {
        makeGridItem(rows)
    } 
}

function getRandomColor(){
    let hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

blackButton.addEventListener('click', e =>{
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            /* gridContainer.style.backgroundColor = '' */
            e.target.style.backgroundColor = 'black'
        }  
    })
})

randColorsButton.addEventListener('click', e =>{
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
           /*  gridContainer.style.backgroundColor = '' */
            e.target.style.backgroundColor = getRandomColor()
        } 
    })
})

eraseButton.addEventListener('click', e =>{
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            e.target.style.backgroundColor = ''
        }  
    })
})

color.addEventListener('input', function(){
    let customColor = document.getElementById('color').value
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') {   
            e.target.style.backgroundColor = customColor
        }  
    })
})


createGrid(8,8)
let resizeClickCounter = 0
resizeButton.addEventListener('click', function (){
    resizeButton.innerHTML = '8 x 8'
    resizeClickCounter++
    console.log(resizeClickCounter)
    if (resizeClickCounter === 0) {
        reset()
        createGrid(8,8)
        toggleGridOn()
        resizeButton.innerHTML = '8 x 8'
    }
    if (resizeClickCounter === 1) {
        reset()
        createGrid(16,16)
        toggleGridOn()
        resizeButton.innerHTML = '16 x 16'
    }
   
    if (resizeClickCounter === 2) {
        reset()
        createGrid(32,32)
        toggleGridOn()
        resizeButton.innerHTML = '32 x 32'
    }
    if (resizeClickCounter === 3) {
        reset()
        createGrid(64,64)
        toggleGridOn()
        resizeButton.innerHTML = '64 x 64'
        resizeClickCounter = -1
    } 
})

let gridToggleClickCounter = 0
gridToggleButton.addEventListener('click', function (){
    gridToggleClickCounter++
    
    console.log(gridToggleClickCounter)
    if(gridToggleClickCounter === 1) {
        for (let i = 0; i < gridCells.length; i++) {
            gridToggleButton.innerHTML = 'Off'
            gridCells[i].style.outline = '1px solid rgba(121, 121, 121, 0.627)';
        }
    }
    if(gridToggleClickCounter === 2) {
        for (let i = 0; i < gridCells.length; i++) {
            gridToggleButton.innerHTML = 'On'
            gridCells[i].style.outline = 'none';
            gridToggleClickCounter = 0 
        }  
    }  
})
function toggleGridOn() {
    gridToggleClickCounter = 0
    gridToggleButton.innerHTML = 'On'
}

clearButton.addEventListener('click', e =>{
    reset()
    toggleGridOn()
    createGrid(8,8)
 }) 

function reset() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}