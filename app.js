const container = document.getElementById('container')
const gridItem = document.querySelector('grid-item')
const randColorsButton = document.getElementById('random-colors-button')

function makeGridItem(numItems) {

    for (let i = 0; i < (numItems); i++) {
      let cell = document.createElement("div")
      cell.innerText = (i + 1)
      cell.className =  "grid-item"
      container.appendChild(cell)
     
    }
    
    container.addEventListener('mouseover', e =>{
        if(e.target.matches = 'div.grid-item') {
            e.target.style.backgroundColor = 'grey' 
        } 
    })
}

function gridCreator(rows, columns) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < rows; i++) {
        makeGridItem(columns)
    }
}

function promptGridSize() {

    let usersNum = prompt("Enter a number 1-64", 16)
    if(usersNum <= 64) {
        gridCreator(usersNum, usersNum)
    }
    else {
        usersNum = prompt("Invalid size! Your value must be between 1-64!");
    }
}

randColorsButton.addEventListener('click', e =>{
    container.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            e.target.style.backgroundColor = 'red'
        }
        
    })
  
})

promptGridSize()