const numerosGuardados = [];

function preguntarNumero(){

    numeroInput = prompt("Por favor, introduzca un numero: ")

    while ( !Number.isInteger(parseInt(numeroInput)) ){

        numeroInput = prompt("Por favor, introduzca un numero válido: ");
    }

    return parseInt(numeroInput);
}

function conseguirNumeros(){


    while (numerosGuardados.length<4){

        numerosGuardados.push(preguntarNumero());
    }

}

function encontrarMayor(){

    // Los puntos sacan los valores del array y consigue que la funcion predefinida de Max funcione correctamente. Ya que está pensada para argumentos y no arrays.
    return Math.max(...numerosGuardados);
}

function enseñarMayor(){

    console.log("El numero más alto de los que has introducido es: " + encontrarMayor(numerosGuardados));
}

function avisarConsola(){

    alert("Por favor, revisa la consola para comprobar el número más alto de los que has introducido.")
}

function main(){

    conseguirNumeros();
    enseñarMayor(encontrarMayor());
    avisarConsola();
}

