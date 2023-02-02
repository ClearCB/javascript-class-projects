// You need to set a IP in which the server sends you a number from 1 to 99 to let this work.


function numero(){
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function(){

        if (this.responseText.length > 0){
            let data = JSON.parse(this.responseText);
            document.getElementById("prueba").innerHTML = "El numero es: " + data.numero;
            if (data.numero>50){
                document.getElementById("prueba").className="mayor";
            }
            else{
                document.getElementById("prueba").className="menor";
            }
        }
    }
    
    // Here remove the ip and set the one that works correctly
    xhttp.open("GET","http://172.16.135.81/tom.php");
    xhttp.send();  

}