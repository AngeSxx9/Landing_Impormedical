const carrusel = document.querySelector(".cards");

var intervalo = 0;
var step = 5;

const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
    },10);
};

const stop = () => {};

start();