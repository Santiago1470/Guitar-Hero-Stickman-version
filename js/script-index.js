var contenedorJuego = document.querySelector(".contenedor-juego");


/* Sección de funciones para crear los personajes del juego */

function crearJugadores() {
    let posiciones = ["0px", "120px", "230px", "340px"]
    let img = document.createElement("img");
    img.setAttribute("class", "jugador");
    img.setAttribute("src", "imagenes/gif-jugador3-sinFondo.gif");
    img.setAttribute("width", "110px");
    img.dataset.velocidad = 0;
    // Math.random() * (10 - 1) + 1
    let carril = Math.floor(Math.random() * (5 - 1) + 1)
    img.dataset.posicion = carril - 1;
    if (carril - 1 == 0) {
        img.style.filter = "drop-shadow(10px 7px 10px #5DADE2)";
    } else if (carril - 1 == 1) {
        img.style.filter = "drop-shadow(10px 7px 10px #82E0AA )";
    } else if (carril - 1 == 2) {
        img.style.filter = "drop-shadow(10px 7px 10px #D98880)";
    }
    else if (carril - 1 == 3) {
        img.style.filter = "drop-shadow(10px 7px 10px #F7DC6F)";
    }
    img.style.top = posiciones[carril - 1];

    contenedorJuego.appendChild(img);
}

var hrPos = 0;
for (let i = 0; i < 3; i++) {
    let hr = document.createElement("hr");
    hr.setAttribute("class", "piso");
    hr.style.top = `${hrPos + 120}px`;
    contenedorJuego.appendChild(hr);
    hrPos = hrPos + 115;
}


/* Sección de funciones para inicar, pausar y finalizar el juego */

var reproducir = "";
var mover = "";
var clicInciar = 0;
function iniciar() {
    clicInciar = 1 + clicInciar;
    if (clicInciar == 1) {
        reproducir = setInterval(() => {
            crearJugadores();

            // 900 ms para la velocidad con que se generan los personajes
        }, 900);

        mover = setInterval(() => {
            let hijos = document.querySelectorAll(".jugador");
            hijos.forEach(h => {
                let marginActual = parseInt(h.dataset.velocidad);
                let marginNueva = marginActual + 6;
                h.style.marginLeft = `${marginNueva}px`;
                h.dataset.velocidad = marginNueva;
                let contenedorJuegoAncho = contenedorJuego.clientWidth;
                if (marginActual > (contenedorJuegoAncho)) {
                    contenedorJuego.removeChild(h);
                }
            });

            // 10 ms para la velocidad con que se mueven los personajes
        }, 10);
    }
    pausa = false;
}

function pausar() {
    clearInterval(reproducir);
    clearInterval(mover);
    clicInciar = 0;
    pausa = true;
}

var puntajeMax = 0;
function finalizar() {
    clearInterval(reproducir);
    clearInterval(mover);
    let hijos = document.querySelectorAll(".jugador");
    hijos.forEach((h) => {
        contenedorJuego.removeChild(h);
    });
    clicInciar = 0;
    let txtPuntajeMax = document.getElementById("txtPuntajeMaximo");
    let txtPuntaje = document.getElementById("txtPuntaje");
    txtPuntaje.setAttribute("value", "");
    if (puntaje > puntajeMax) {
        txtPuntajeMax.setAttribute("value", `${puntaje}`);
        puntajeMax = puntaje;
    }
    puntaje = 0;
}


/* Sección de eventos del teclado */

var llegadas = document.querySelectorAll(".llegada");

var puntaje = 0;
var pausa = false;
document.addEventListener("keypress", function (evt) {
    let jugadores = document.querySelectorAll(".jugador");
    let contenedorJuegoAncho = contenedorJuego.clientWidth;
    let audio = document.querySelector(".audio-bien");
    let txtPuntaje = document.getElementById("txtPuntaje");
    if (evt.key == "i") {
        iniciar();
    }
    if (evt.key === "o") {
        pausar();
    }
    if (evt.key === "p") {
        finalizar();
    }

    if (evt.key == "a") {
        for (let j of jugadores) {
            if (pausa) {
                break;
            }
            if (j.dataset.posicion == 0 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho -70)) {
                puntaje = puntaje + 10;
                txtPuntaje.setAttribute("value", `${puntaje}`);
                audio.play()
                let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.filter = "drop-shadow(10px 7px 10px #5DADE2)";
                final.style.position = "absolute";
                final.style.top = "-30px";
                final.style.left = (j.dataset.velocidad) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);

                    // 500 ms hasta remover la animación de la explosión del personaje
                }, 500);
                break;
            } else if (j.dataset.posicion == 0) {
                if (puntaje > 0) {
                    puntaje = puntaje - 10;
                }

                txtPuntaje.setAttribute("value", `${puntaje}`);
                break;
            }
        }

    } else if (evt.key == "s") {
        for (let j of jugadores) {
            if (pausa) {
                break;
            }
            if (j.dataset.posicion == 1 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)) {
                puntaje = puntaje + 10;
                txtPuntaje.setAttribute("value", `${puntaje}`);
                audio.play()
                let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.filter = "drop-shadow(10px 7px 10px #82E0AA )";
                final.style.position = "absolute";
                final.style.top = "90px";
                final.style.left = (j.dataset.velocidad) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);

                    // 500 ms hasta remover la animación de la explosión del personaje
                }, 500);
                break;
            } else if (j.dataset.posicion == 1) {
                if (puntaje > 0) {
                    puntaje = puntaje - 10;
                }
                txtPuntaje.setAttribute("value", `${puntaje}`);

                break;
            }
        }
    } else if (evt.key == "d") {
        for (let j of jugadores) {
            if (pausa) {
                break;
            }
            if (j.dataset.posicion == 2 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)) {
                puntaje = puntaje + 10;
                txtPuntaje.setAttribute("value", `${puntaje}`);
                audio.play()
                let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.filter = "drop-shadow(10px 7px 10px #D98880)";
                final.style.position = "absolute";
                final.style.top = "200px";
                final.style.left = (j.dataset.velocidad) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);

                    // 500 ms hasta remover la animación de la explosión del personaje
                }, 500);
                break;
            } else if (j.dataset.posicion == 2) {
                if (puntaje > 0) {
                    puntaje = puntaje - 10;
                }
                txtPuntaje.setAttribute("value", `${puntaje}`);

                break;
            }
        }
    } else if (evt.key == "f") {
        for (let j of jugadores) {
            if (pausa) {
                break;
            }
            if (j.dataset.posicion == 3 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)) {
                puntaje = puntaje + 10;
                txtPuntaje.setAttribute("value", `${puntaje}`);
                audio.play()
                let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.filter = "drop-shadow(10px 7px 10px #F7DC6F)";
                final.style.position = "absolute";
                final.style.top = "310px";
                final.style.left = (j.dataset.velocidad) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);

                    // 500 ms hasta remover la animación de la explosión del personaje
                }, 500);
                break;
            } else if (j.dataset.posicion == 3) {
                if (puntaje > 0) {
                    puntaje = puntaje - 10;
                }
                txtPuntaje.setAttribute("value", `${puntaje}`);

                break;
            }
        }
    }
    vez = 0;
})

document.addEventListener("keydown", (evt) => {

    if (evt.key === "a") {
        llegadas.item(0).classList.toggle('llegadaBtn');

    } else if (evt.key == "s") {
        llegadas.item(1).classList.toggle('llegadaBtn');

    } else if (evt.key == "d") {
        llegadas.item(2).classList.toggle('llegadaBtn');

    } else if (evt.key == "f") {
        llegadas.item(3).classList.toggle('llegadaBtn');

    }
})

document.addEventListener("keyup", (evt) => {
    if (evt.key == "a") {
        llegadas.item(0).classList.toggle('llegadaBtn');

    } else if (evt.key == "s") {
        llegadas.item(1).classList.toggle('llegadaBtn');
    } else if (evt.key == "d") {
        llegadas.item(2).classList.toggle('llegadaBtn');
    } else if (evt.key == "f") {
        llegadas.item(3).classList.toggle('llegadaBtn');
    }
})
