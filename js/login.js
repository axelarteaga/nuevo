const passwordCorrecta = "220626";

const campoPassword = document.getElementById("password");
const botonEntrar = document.getElementById("boton-entrar");
const mensajeError = document.getElementById("mensaje-error");


botonEntrar.addEventListener("click", function () {

    const passwordIngresada = campoPassword.value;


    if (passwordIngresada === passwordCorrecta) {

        mensajeError.style.color = "#b8ffcf";

        mensajeError.textContent = "Sabía que eras tú ❤️";

        setTimeout(function () {

            window.location.href = "inicio.html";

        }, 1000);

    } else {

        mensajeError.style.color = "#ffb3c6";

        mensajeError.textContent =
            "Mmm... esa no es nuestra clave ❤️";

    }

});