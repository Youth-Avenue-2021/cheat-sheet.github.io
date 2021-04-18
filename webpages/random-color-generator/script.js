let randomColor = document.getElementById('randomColor');

function changeColor() {
    let body = document.querySelector('html');
    let background = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
    body.style.background = background;
    body.style.transition = 'background 0.6s ease';
    randomColor.innerText = background;
}