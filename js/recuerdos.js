const carrusel = document.getElementById("carrusel");

const botonAnterior = document.getElementById("anterior");

const botonSiguiente = document.getElementById("siguiente");

let rotacion = 0;

const grados = 72;


/* SIGUIENTE */

botonSiguiente.addEventListener("click", function () {

    rotacion -= grados;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;

});


/* ANTERIOR */

botonAnterior.addEventListener("click", function () {

    rotacion += grados;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;

});


/* DESLIZAR CON EL DEDO */

let inicioX = 0;

let finalX = 0;


carrusel.addEventListener("touchstart", function (evento) {

    inicioX = evento.touches[0].clientX;

});


carrusel.addEventListener("touchend", function (evento) {

    finalX = evento.changedTouches[0].clientX;

    const diferencia = finalX - inicioX;


    if (Math.abs(diferencia) < 50) {

        return;

    }


    if (diferencia < 0) {

        rotacion -= grados;

    } else {

        rotacion += grados;

    }


    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;

});