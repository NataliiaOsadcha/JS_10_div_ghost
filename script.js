const newDiv = document.createElement('div');
newDiv.classList.add('div-color');
newDiv.textContent = 'test text';

const targetButton = document.getElementById('button');
const container = document.querySelector('.container');

targetButton.addEventListener('mouseover', () => {
    container.appendChild(newDiv);
});

targetButton.addEventListener('mouseout', () => {
    container.removeChild(newDiv);
});

console.log(document.body);