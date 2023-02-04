function conseguirTextoNodo(nodoTag){

    return document.getElementsByTagName(nodoTag);
}

function enseñarTextoNodo(nodos){

    for (let i = 0; i<nodos.length; i++){

        document.getElementById("segundo").innerHTML += nodos[i].textContent+"<br>";
    }
}

// ...args es el equivalente a varargs (Java) o args* (python)
function escribirTextos(...tiposNodo){

    for (let tipoNodo of tiposNodo){

        enseñarTextoNodo(conseguirTextoNodo(tipoNodo));
    }

}

function pedirTexto(){

    return prompt("Rápido! Añade aquí el contenido para salvar al pobre enfermo.");

}
function cambiarContenido(idNodo){

    document.getElementById(idNodo).innerHTML=pedirTexto();
}