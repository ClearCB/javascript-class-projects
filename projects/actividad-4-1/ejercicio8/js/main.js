var nombres = [];

function guardarNombres(){

    for (let i = 1; i<=5; i++){

        nombres.push(document.getElementById("nombre"+i).value);
    }
}

function createElementoLista(nombre){

    listaElemento = document.createElement("li");
    listaElemento.appendChild(document.createTextNode(nombre));
    return listaElemento;
}

function escribirNombres(){

    guardarNombres();
    
    for (let j = 0; j<nombres.length; j++){

        
        document.getElementById("listanombres").appendChild(createElementoLista(nombres[j]));
    }
}