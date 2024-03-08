var contenedorJuego = document.querySelector(".contenedor-juego");

// function main(){
//     for (let i = 0; i < 4; i++) {
//         crearJugadores();
//     }
// }
var posi = 10;
var margin = 0;
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
    img.style.top = posiciones[carril - 1];
    // console.log("Aqui va")
    // console.log(carril - 1)
    // img.style.marginLeft = `${margin + Math.random()}px`;
    // img.setAttribute("top", `${posi}px`);

    contenedorJuego.appendChild(img);

    posi = posi + 110;
    if (posi == 450) {
        posi = 10;
    }

}

var mover = "";


// console.log(document.querySelector(".jugador").style.marginLeft);
// setInterval(() => {


//     let imgs = document.querySelectorAll(".jugador");
//     imgs.forEach(i => {
//         console.log(i.style.marginLeft);
//     });
// }, 1000);

var reproducir = "";
var hrPos = 0;
for (let i = 0; i < 3; i++) {
    let hr = document.createElement("hr");
    hr.setAttribute("class", "piso");
    hr.style.top = `${hrPos + 120}px`;
    contenedorJuego.appendChild(hr);
    hrPos = hrPos + 115;
}

var clicInciar = 0;
function iniciar() {
    clicInciar = 1 + clicInciar;
    if (clicInciar == 1) {
        reproducir = setInterval(() => {
            crearJugadores();
        }, 600);

        mover = setInterval(() => {
            let hijos = document.querySelectorAll(".jugador");
            hijos.forEach(h => {
                let marginActual = parseInt(h.dataset.velocidad);
                // console.log(typeof marginActual)
                let marginNueva = marginActual + Math.random() * (10 - 1) + 1;
                h.style.marginLeft = `${marginNueva}px`;
                h.dataset.velocidad = marginNueva;
                let contenedorJuegoAncho = contenedorJuego.clientWidth;
                console.log(contenedorJuegoAncho)
                if (marginActual > (contenedorJuegoAncho)) {
                    contenedorJuego.removeChild(h);
                }
                // console.log(marginNueva)
            });
        }, 10);
    }

}

function pausar() {
    clearInterval(reproducir);
    clearInterval(mover);
    clicInciar = 0;
}

function finalizar() {
    clearInterval(reproducir);
    clearInterval(mover);
    let hijos = document.querySelectorAll(".jugador");
    hijos.forEach((h) => {
        contenedorJuego.removeChild(h);
    });
    clicInciar = 0;
}

var llegadas = document.querySelectorAll(".llegada");
var puntaje = 0;
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
    jugadores.forEach((j) => {
    if(evt.key == "a"){
        //  jugadores.forEach((j) => {
            // console.log(j.dataset.posicion)
            if(j.dataset.posicion == 0 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)){
                puntaje = 10 + puntaje;
                txtPuntaje.setAttribute("value", `${puntaje}`);
                audio.play()
                let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.position = "absolute";
                final.style.top = "-30px";
                final.style.left = (j.dataset.velocidad + 150) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);
                }, 500);
            }
        //  })
        // llegadas.item(0).classList.toggle('llegadaBtn');
        
        // llegadas.item(0).style.backgroundColor = "black";
        // console.log(llegadas.item(0).style.backgroundColor)
    } else if(evt.key == "s"){
        if(j.dataset.posicion == 1 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)){
            puntaje = 10 + puntaje;
            txtPuntaje.setAttribute("value", `${puntaje}`);
            audio.play()
            let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.position = "absolute";
                final.style.top = "90px";
                final.style.left = (j.dataset.velocidad + 150) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);
                }, 500);
            contenedorJuego.removeChild(j);
        }
    } else if(evt.key == "d"){
        if(j.dataset.posicion == 2 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)){
            puntaje = 10 + puntaje;
            txtPuntaje.setAttribute("value", `${puntaje}`);
            audio.play()
            let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.position = "absolute";
                final.style.top = "200px";
                final.style.left = (j.dataset.velocidad + 150) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);
                }, 500);
            contenedorJuego.removeChild(j);
        }
    } else if(evt.key == "f"){
        if(j.dataset.posicion == 3 && Math.floor(j.dataset.velocidad) > (contenedorJuegoAncho - 70)){
            puntaje = 10 + puntaje;
            txtPuntaje.setAttribute("value", `${puntaje}`);
            audio.play()
            let final = document.createElement("img");
                final.setAttribute("src", "imagenes/gif-jugador-fin3.gif");
                final.setAttribute("width", "130px");
                final.style.position = "absolute";
                final.style.top = "310px";
                final.style.left = (j.dataset.velocidad + 150) + "px";
                contenedorJuego.removeChild(j);
                contenedorJuego.appendChild(final);
                setTimeout(() => {
                    contenedorJuego.removeChild(final);
                }, 500);
            contenedorJuego.removeChild(j);
        }
    }
    })
})

document.addEventListener("keydown", (evt) => {
    
    if(evt.key == "a"){
        llegadas.item(0).classList.toggle('llegadaBtn');
        
        // llegadas.item(0).style.backgroundColor = "black";
        // console.log(llegadas.item(0).style.backgroundColor)
    } else if(evt.key == "s"){
        llegadas.item(1).classList.toggle('llegadaBtn');

    } else if(evt.key == "d"){
        llegadas.item(2).classList.toggle('llegadaBtn');
 
    } else if(evt.key == "f"){
        llegadas.item(3).classList.toggle('llegadaBtn');

    }
})

document.addEventListener("keyup", (evt) => {
    if(evt.key == "a"){
        llegadas.item(0).classList.toggle('llegadaBtn');
        
        // llegadas.item(0).style.backgroundColor = "black";
        // console.log(llegadas.item(0).style.backgroundColor)
    } else if(evt.key == "s"){
        llegadas.item(1).classList.toggle('llegadaBtn');
    } else if(evt.key == "d"){
        llegadas.item(2).classList.toggle('llegadaBtn');
    } else if(evt.key == "f"){
        llegadas.item(3).classList.toggle('llegadaBtn');
    }
})
