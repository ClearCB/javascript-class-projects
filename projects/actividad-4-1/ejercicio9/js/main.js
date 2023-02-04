

function concatenarFrases(){

    return document.getElementById("frase1").value + "  " +document.getElementById("frase2").value;
}

function crearParrafo(frases){

    return document.createElement("p").appendChild(document.createTextNode(frases));

}

function cambiarClaseFooter(){

    document.getElementById("footer").className="nuevofooter";
}

function escribirFraseFooter(){

    document.getElementById("footer").appendChild(crearParrafo(concatenarFrases()));
    
    setTimeout(cambiarClaseFooter, 4000);
}

