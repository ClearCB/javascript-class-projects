function consulta() {
   let dominio = document.getElementById("dominio").value;
   const xhttp = new XMLHttpRequest();

   xhttp.onload = function () {
      if (this.responseText.length > 0) {
         let data = JSON.parse(this.responseText);
         const regDate = new Date(data.events[0].eventDate);
         const expDate = new Date(data.events[1].eventDate);
         const miliseconds = Date.now();
         const actualDate = new Date(miliseconds);
         
         dateReg = regDate.getFullYear().toString() + "/" + regDate.getMonth().toString() + "/"  + regDate.getDay().toString();
         dateExp = expDate.getFullYear().toString() + "/" + expDate.getMonth().toString() + "/"  + expDate.getDay().toString();

         timeRegistred = (actualDate.getFullYear()-regDate.getFullYear()).toString();

         document.getElementById("nombre").innerHTML =  data.ldhName;
         document.getElementById("fechareg").innerHTML = dateReg;
         document.getElementById("fechaexp").innerHTML = dateExp;
         document.getElementById("disponible").innerHTML = "Ocupado";
         document.getElementById("tiempo").innerHTML = "El tiempo que lleva registrado es: " + timeRegistred + " años. ";
      }
      else {
         document.getElementById("nombre").innerHTML =  dominio;
         document.getElementById("fechareg").innerHTML = "No está registrado";
         document.getElementById("fechaexp").innerHTML = "----";
         document.getElementById("disponible").innerHTML = "Libre";
      }
   }

   xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/" + dominio);
   xhttp.send();
}
