let gridAmount = 16*16;
const container = document.querySelector('#container');

function createGrid(){
    for(let i = 1; i <= gridAmount; i++){
    const divCreation = document.createElement('div');
    container.appendChild(divCreation);
    divCreation.addEventListener("mouseover", function(){
        divCreation.classList.add("black")
    })
    }
}
createGrid()


