var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var h3 = document.querySelector('h3');
var body = document.querySelector('body');
var button = document.querySelector('button');

function setGradient() {
    body.style.background = 'linear-gradient(to right top, ' + color1.value + ', ' + color2.value + ')';

    h3.textContent = body.style.background;
    h3.classList.add('background');
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

function randomNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;

}
function getrandomColor() {
    return 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')';
}

button.addEventListener('click', function () {
    colorA = getrandomColor();
    colorB = getrandomColor()
    
    body.style.background = 'linear-gradient(to right top, ' + colorA + ', ' + colorB + ')';
    h3.textContent = body.style.background;
    h3.classList.add('background');
});
    