function actualDate(){
    date = Date.now();

    return new Date(date);
}

function getHours(){

    return actualDate().getHours().toString();
}

function getMinutes(){

    return actualDate().getMinutes().toString();
}
function getSeconds(){

    return actualDate().getSeconds().toString();
}

function digits(){

    return getHours()+getMinutes()+getSeconds();
}

function writeDiv(number){

    div = document.createElement("div");
    div.className="cuadro"+number;
    document.getElementById("reloj").appendChild(div);
}

function writeDigits(){

    numbers = Array.from(digits());

    for (let i = 0; i<numbers.length; i++){
        writeDiv(numbers[i]);
    }

    refresh();

}


function refresh(){

    setTimeout(writeDigits(),000)

}
