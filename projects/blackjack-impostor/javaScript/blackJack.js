var suma = 0;
var numTirada = 1;

// Comprueba la suma
function checkRendicion() {
    
    if ( (18<=suma) && (suma<=21) ){
        document.getElementById("estado").className=".ganador";
    }

    else{
        document.getElementById("estado").className=".gallina";
    }

}

// Comprueba la suma
function checkSuma() {

    if (suma>21){
        document.getElementById("estado").className=".perdedor";
    }
}
// Añade el valor de la tirada a suma
function añadirValor(tirada){

    suma += tirada;

}
// Funcion que "emula" la respuesta del servidor que genera un numero del 1,6 (tirada de dado)
function generarTirada(){

    var tirada = Math.floor(Math.random()*6)+1;
    document.getElementById("tirada").innerHTML=tirada;
    return tirada;

}
//
function tirar(){

    var tirada = generarTirada(); 
    añadirValor(tirada);
    document.getElementById("resultado").innerHTML=suma;
    añadirRegistro(tirada, suma);
    checkSuma();

}
//
function añadirRegistro(tirada, total){

    
    document.getElementById("registros").innerHTML+='<li class="registro">Tirada numero '+ numTirada + ' dado (' + tirada + '). Total: ' + total + '</li>';
    numTirada+=1;
}

function reiniciar(){

    window.location.reload();
}

function retirada(){

    checkRendicion();
}