document.addEventListener("keydown", getKey);

// Declare the array that will store the keyCodes.
var teclas = [];

// Define keyCodes array for arrow keys
const range3 = defineKeyCodes(37, 40)
// // Define keyCodes array for numbers
const range1 = defineKeyCodes(48, 57)
// Define keyCodes array for letters
const range2 = defineKeyCodes(65, 90)

teclas = teclas.concat(range1);
teclas = teclas.concat(range2);
teclas = teclas.concat(range3);


var actual;
var aciertos = 0;
var fechaInicio;
var fase = 0;
const puntuacionGanadora=20;

function defineKeyCodes(start, end){

    // More information about this: https://jasonwatmore.com/post/2021/10/02/vanilla-js-create-an-array-with-a-range-of-numbers-in-a-javascript
    return [...Array(end - start + 1).keys()].map(x => x + start);
}


function empezar() {

    elegirTecla();
    fechaInicio = Date.now();
    fase = 1;
    document.getElementById("juego").style.backgroundColor = "aqua";
    document.getElementById("mensaje").innerHTML = "Press the key that is in the screen";
    document.getElementById("tiempo").innerHTML = "";
    

}

function elegirTecla() {

    let index = Math.floor(Math.random() * teclas.length);
    actual = teclas[index];
    document.getElementById("key").src = "./img/" + teclas[index] + ".jpg";

}

function getDate() {

    tiempo = Date.now() - fechaInicio;
    tiempoAcierto = new Date(tiempo);
    segundos = tiempoAcierto.getSeconds();
    return segundos;
}

function checkWinner() {

    if (aciertos == puntuacionGanadora) {


        document.getElementById("juego").style.backgroundColor = "yellow";
        document.getElementById("key").src = "./img/winner.jpg";
        document.getElementById("mensaje").innerHTML = "You won! Press 'space' to play again.";
        document.getElementById("tiempo").innerHTML = "You spent " + getDate() + "  seconds to win! Try it faster.";
        fase = 3;
        aciertos = 0;
    }


}

function showLoser() {

    aciertos = 0;
    document.getElementById("key").src = "./img/loser.jpg";
    document.getElementById("mensaje").innerHTML = "You lost! Press 'space' to start playing again.";
    fase = 3;

}


function getKey(event) {

    if ((fase == 0 || fase == 3) && (event.keyCode == 32)) {
        empezar();
    }


    else if (fase == 1) {


        //correct
        if (event.keyCode == actual) {
            document.getElementById("juego").style.backgroundColor = "green";
            elegirTecla();
            aciertos += 1;
            checkWinner();
        }


        //incorrect
        else if (event.keyCode != actual) {
            document.getElementById("juego").style.backgroundColor = "red";
            showLoser();

        }
    }
}


