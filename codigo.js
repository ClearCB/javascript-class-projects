function consulta() {
    let dominio = document.getElementById("dominio").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
     if(this.responseText.length>0){  
        let data = JSON.parse(this.responseText);  
        document.getElementById("resultado").innerHTML = "El dominio " +data.ldhName + " está registrado.";
     }
     else {
        document.getElementById("resultado").innerHTML = "El dominio " + dominio + " está libre.";
     }
    }

    xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/"+dominio);
    xhttp.send();
  }
