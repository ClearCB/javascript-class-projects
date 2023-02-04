/*  La conversión entre dolar y euro es la siguiente: 1$ -- 0.92€ a día 04/02/2023.
    En el caso de que se quiera cambiar el funcionamiento del programa para añadir una nueva conversión, se tendría que añadir una nueva conversión 
    y modificar las funcions para parametrizarlas.

    Para conseguir la conversión, utilizaré los factores de conversión propios de operaciones matemáticas: cantidadAConvertir * (relaciónDeConversión)

    Debido al redondeo, el valor es aproximado. No es 100% valido, sin embargo, consiguiendo una precisión mayor sería más fiel a la realidad.
*/

// Nombramos constantes para la relación de las monedas.
var RELACION_DOLAR_EURO=0.92;
var RELACION_EURO_DOLAR=1/0.92;

// De dolar a euro
function convertirAEuro(cantidadDolar){

    return Math.floor(cantidadDolar * RELACION_DOLAR_EURO);
}

// De euro a dolar
function convertirADolar(cantidadEuro){

    return Math.floor(cantidadEuro * RELACION_EURO_DOLAR);
}

function conseguirValor(idForm){

    return document.getElementById(idForm).value;
} 

function botonAEuro(idForm){

    document.getElementById("cantidadeuro").innerHTML=convertirAEuro(conseguirValor(idForm));
}

function botonADolar(idForm){

    document.getElementById("cantidaddolar").innerHTML=convertirADolar(conseguirValor(idForm));
}