function consulta() {
   let dominio = document.getElementById("dominio").value;
   const xhttp = new XMLHttpRequest();

   

   xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/" + dominio);
   xhttp.send();
}
