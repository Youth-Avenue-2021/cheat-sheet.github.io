var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var emoji = document.getElementById("emoji");
let ratingSlider = document.getElementById('ratingSlider');

setTimeout(() => {
    ratingSlider.style.opacity = '1';
    ratingSlider.style.right = '5%';
}, 30000);

function runFn() {
    ratingSlider.style.opacity = '0';
    ratingSlider.style.right = '-5%';
    setTimeout(() => {
        ratingSlider.style.display = 'none';
    }, 1000);
}

slider.oninput = function () {
    emoji.classList.add('sliding-animation');
    emoji.style.transform = `translate(${175 * this.value / 100}px,0px)`;
}