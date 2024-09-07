const container = document.querySelector('#container');

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
function reset(){
    container.innerHTML = '';
    createGrid()
}

function createGrid(gridAmount = (16*16)){
    if(gridAmount > 2500){
        let error = document.querySelector('#error');
        error.classList.add("error")
        error.textContent = "Please enter a number below 50!"
    } else{
        for(let i = 1; i <= gridAmount; i++){
        const div = document.createElement('div');
        div.classList = 'cell'
        container.appendChild(div);
        let cellSize = 320/Math.sqrt(gridAmount);
        div.style.width = `${cellSize}px`
        div.style.height = `${cellSize}px`
        div.addEventListener("mouseover", function(){
            div.classList.add("black");
        });
        }
        error.textContent = '';
    }
    
}
createGrid();

const btn = document.querySelector('#btn');
btn.addEventListener("click", removeBoard);

function removeBoard(){
    container.innerHTML = '';
    let userChoice = Number(prompt("Pick a grid size"));
    let newGridSize = userChoice * userChoice;
    createGrid(newGridSize)
}


