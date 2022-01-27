const container = document.getElementById('container')

const randColorsButton = document.getElementById('random-colors-button')

function makeGridItem(numItems) {

    for (let i = 0; i < (numItems); i++) {
      let cell = document.createElement("div")
      cell.className =  "grid-item"
      container.appendChild(cell)
    } 
}

function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < columns; i++) {
        makeGridItem(rows)
    }
}

function promptGridSize() {
    

    let usersNum = prompt("To resize the pixels enter a number 5-70", 16)
    if(usersNum <= 70 && usersNum >= 5) {
        createGrid(usersNum, usersNum)
    }
    else {
        do{
            usersNum = prompt("Invalid size! Your value must be between 5-70!")
        }
        while(usersNum > 70 || usersNum < 5)
    }
    createGrid(usersNum, usersNum)

}

container.addEventListener('mouseover', e =>{
    e.target = 'div.grid-item'
    /* if(e.target.matches = 'div.grid-item') { */
        e.target.style.backgroundColor = 'grey' 
/*     }  */
})

randColorsButton.addEventListener('click', e =>{
    container.addEventListener('mouseover', e =>{ 
        if(e.target.matches = 'div.grid-item') { 
            e.target.style.backgroundColor = 'red'
        }
        
    })
  
})

promptGridSize()