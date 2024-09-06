const gridAmount = 16*16;
const container = document.querySelector('#container');

for(let i = 1; i <= gridAmount; i++){
    const divCreation = document.createElement('div');
    container.appendChild(divCreation);
}

