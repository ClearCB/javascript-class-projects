var libres = 0;

function consulta(dominio) {
   const xhttp = new XMLHttpRequest();

   xhttp.onload = function () {
      if (this.responseText.length > 0) {
         document.getElementById("information").innerHTML += "<br>"+dominio+" ocupado  ";
      }
      else {
         document.getElementById("information").innerHTML += "<br>"+dominio+" libre  ";
      }
   }

   xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/" + dominio);
   xhttp.send();
}
function buscarDominios(){

   const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']
   
   for (let i=0; i<5; i++){

      for (let j=0; j<5; j++){
         var domain = "a"+letters[i]+letters[j]+"ib.com";
         consulta(domain);
         }
   }
}
