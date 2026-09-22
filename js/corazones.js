document.addEventListener("click", function (evento) {

    const boton = evento.target.closest("button");

    if (!boton) {
        return;
    }

    const destino = boton.getAttribute("data-destino");

    for (let i = 0; i < 10; i++) {

        const corazon = document.createElement("span");

        corazon.textContent = "❤️";

        corazon.classList.add("corazon-animado");

        corazon.style.left =
            (evento.clientX + (Math.random() * 80 - 40)) + "px";

        corazon.style.top =
            (evento.clientY + (Math.random() * 30 - 15)) + "px";

        corazon.style.animationDelay =
            (Math.random() * 0.2) + "s";

        document.body.appendChild(corazon);

        setTimeout(function () {
            corazon.remove();
        }, 3000);

    }

    /*
       Si el botón tiene un destino,
       esperamos un poco antes de cambiar de página.
    */

    if (destino) {

        evento.preventDefault();

        setTimeout(function () {

            window.location.href = destino;

        }, 2000);

    }

});