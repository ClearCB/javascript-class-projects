var notas = [];

function conseguirNumero(){

    for (let j = 1; j<=3; j++){

        notas.push(parseInt(document.getElementById("nota"+j).value));
    }
}

function conseguirNombre(){
    return document.getElementById("nombre").value;
}

function calcularNota(){

    conseguirNumero();

    // Utilizando una función lambda, conseguimos la suma total de los elementos del array "notas"
    suma = notas.reduce((previous, current) => current +=previous);

    return (suma/notas.length);
} 

// Esto es una pequeña broma, no me lo cuentes como error :(
function checkNombre(){
    if (conseguirNombre().toUpperCase()=="ABEL"){
        document.getElementById("media").innerHTML=10;
    }
}

function escribirNota(){

    document.getElementById("nombrealumno").innerHTML=conseguirNombre();
    document.getElementById("media").innerHTML=calcularNota();

    checkNombre();
}