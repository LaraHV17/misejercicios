const RATIO = 0.016;
const VELOCIDAD = 0.25;
var y1 = -50; //altura a la que queremos que aparezca el gatito
var y2 = 10;
var x1 = 200; //posición en el eje x en el que queremos que esté el gatito
var x2 = 300;

//setInterval cada cierto tiempo ejecuta una función
setInterval(() => {
    y1 += VELOCIDAD;
    y2 += VELOCIDAD;
    document.querySelector("#gato1").style.top = `${y1}px`;
    document.querySelector("#gato1").style.left = `${x1}px`;
    if (y1 > window.innerHeight) {
        y1 = -100;
        x1 = Math.random() * window.innerWidth;
    }
    document.querySelector("#gato2").style.top = `${y2}px`;
    document.querySelector("#gato2").style.left = `${x2}px`;
    if (y2 > window.innerHeight) {
        y2 = -100;
        x2 = Math.random() * window.innerWidth;
    }
}, RATIO);