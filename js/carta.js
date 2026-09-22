const textoCarta = document.getElementById("texto-carta");

const cursor = document.querySelector(".cursor");


const carta = `Mi amor:
Hoy quiero recordarte lo especial que eres para mí.
Gracias por cada sonrisa, cada abrazo,
cada momento y cada recuerdo que hemos creado juntos.
No sé qué nos tenga preparado el futuro,
pero quiero seguir caminando contigo,
aprendiendo contigo y construyendo nuestra historia.
Eres una de las cosas más bonitas
que me han pasado en la vida.

TE AMO MI VIDA. ❤️

Con amor,
Axel`;


let posicion = 0;


function escribirCarta() {

    if (posicion < carta.length) {

        textoCarta.textContent += carta.charAt(posicion);

        posicion++;

        setTimeout(escribirCarta, 45);

    } else {

        cursor.style.display = "none";

    }

}


escribirCarta();