const gridContainer = document.getElementById('grid-container')
const resizeButton = document.getElementById('resize-button')
const gridToggleButton = document.getElementById('grid-toggle-button')
const onButton = document.getElementById('on-button')
const color = document.getElementById('color')
const gridCells = document.getElementsByClassName("grid-item")

// creates grid cells dynamically
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

// creates grid using the added cell divs and places them in the correct number of rows/columns
function createGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows)
    gridContainer.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < columns; i++) {
        makeGridItem(rows)
    } 
}

// generates random num/letter combo that is 6 characters long to create a hex color value
function getRandomColor(){
    let hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

// using onclick, if button is selected and a grid-item is moused over its color will change
function blackButton() {
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            e.target.style.backgroundColor = 'black'
        }  
    })
}

function randomColorButton() {
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
           /*  gridContainer.style.backgroundColor = '' */
            e.target.style.backgroundColor = getRandomColor()
        } 
    })
}

function eraseButton() {
    gridContainer.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            e.target.style.backgroundColor = ''
        }  
    })
}

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
        /* resizeClickCounter = -1 */
    } 
    if (resizeClickCounter === 4) {
        reset()
        createGrid(80,80)
        toggleGridOn()
        resizeButton.innerHTML = '80 x 80'
        resizeClickCounter = -1
    } 
})


let onBtnClickCounter = 0
onButton.addEventListener('click', function (){
    onBtnClickCounter++
  
    if(onBtnClickCounter === 1) {
        gridContainer.style.boxShadow = "0px 0px 30px rgb(190, 190, 190)"
        gridContainer.style.backgroundColor = "rgb(240, 240, 240)"   
        onButton.style.boxShadow = "0 0 10px rgb(255, 255, 255)"
    }

    if(onBtnClickCounter === 2) {
        gridContainer.style.boxShadow = "none"
        onButton.style.boxShadow = "none"
        gridContainer.style.backgroundColor = "rgb(200, 200, 200)"  
        onBtnClickCounter=0
    }  
})

let gridToggleClickCounter = 0
gridToggleButton.addEventListener('click', function (){
    gridToggleClickCounter++
    
    if(gridToggleClickCounter === 1) {
        for (let i = 0; i < gridCells.length; i++) {
            gridToggleButton.innerHTML = 'Off'
            gridCells[i].style.outline = '1px solid rgba(121, 121, 121, 0.627)'
        }
    }
    if(gridToggleClickCounter === 2) {
        for (let i = 0; i < gridCells.length; i++) {
            gridToggleButton.innerHTML = 'On'
            gridCells[i].style.outline = 'none'
            gridToggleClickCounter = 0 
        }  
    }  
})
function toggleGridOn() {
    gridToggleClickCounter = 0
    gridToggleButton.innerHTML = 'On'
}

function clearButton() {
    reset()
    toggleGridOn()
    resizeButton.innerHTML = '8 x 8'
    createGrid(8,8)
 }

function reset() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}