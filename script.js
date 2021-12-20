const redBtn = document.getElementById('redBtn');
const redLight = document.getElementById('redLight');
const yellowBtn = document.getElementById('yellowBtn');
const yellowLight = document.getElementById('yellowLight');
const greenBtn = document.getElementById('greenBtn');
const greenLight = document.getElementById('greenLight');

redBtn.addEventListener('click', redHandler);

function redHandler() {
    redLight.style.backgroundColor = 'red';
    redLight.style.boxShadow = '0 0 50px red';
    yellowLight.style.backgroundColor = 'white';
    yellowLight.style.boxShadow = 'none';
    greenLight.style.backgroundColor = 'white';
    greenLight.style.boxShadow = 'none';
}

yellowBtn.addEventListener('click', yellowHandler);

function yellowHandler() {
    redLight.style.backgroundColor = 'white';
    redLight.style.boxShadow = 'none';
    yellowLight.style.backgroundColor = 'yellow';
    yellowLight.style.boxShadow = '0 0 50px yellow';
    greenLight.style.backgroundColor = 'white';
    greenLight.style.boxShadow = 'none';
}

greenBtn.addEventListener('click', greenHandler);

function greenHandler() {
    redLight.style.backgroundColor = 'white';
    redLight.style.boxShadow = 'none';
    yellowLight.style.backgroundColor = 'white';
    yellowLight.style.boxShadow = 'none';
    greenLight.style.backgroundColor = 'green';
    greenLight.style.boxShadow = '0 0 50px green';
}

// const time = window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(redHandler, 1000);
//     setTimeout(yellowHandler, 4000);
//     setTimeout(greenHandler, 7000);

//     while (setTimeout(greenHandler, 7000)) {
//         return setTimeout(time, 12000);
//     }
// })

function auto() {
    setTimeout(redHandler, 1000);
    setTimeout(greenHandler, 4000);
    setTimeout(yellowHandler, 7000);

    setTimeout(auto, 12000);
}

auto();