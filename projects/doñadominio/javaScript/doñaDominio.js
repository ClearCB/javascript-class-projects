
function writeHtml(name, regDat, expDat, availability, timeRegistr) {
   document.getElementById("nombre").innerHTML = name;
   document.getElementById("fechareg").innerHTML = regDat;
   document.getElementById("fechaexp").innerHTML = expDat;
   document.getElementById("disponible").innerHTML = availability;
   document.getElementById("tiempo").innerHTML = "El tiempo que lleva registrado es: " + timeRegistr + " años. "
}


function consulta() {
   let dominio = document.getElementById("dominio").value;
   const xhttp = new XMLHttpRequest();

   xhttp.onload = function () {
      if (this.responseText.length > 0) {
         let data = JSON.parse(this.responseText);
         // Get the data of dates
         const regDate = new Date(data.events[0].eventDate);
         const expDate = new Date(data.events[1].eventDate);
         // Calculate de actual year
         const miliseconds = Date.now();
         const actualDate = new Date(miliseconds);
         // Formate the date to something i can work with
         dateReg = regDate.getFullYear().toString() + "/" + regDate.getMonth().toString() + "/" + regDate.getDay().toString();
         dateExp = expDate.getFullYear().toString() + "/" + expDate.getMonth().toString() + "/" + expDate.getDay().toString();
         // Getting the years it has been registred
         timeRegistred = (actualDate.getFullYear() - regDate.getFullYear()).toString();

         writeHtml(data.ldhName,dateReg,dateExp,"Ocupado",timeRegistred );
      }
      else {
         writeHtml(dominio,"No está registrado", "----","Libre","----" );
      }
   }

   xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/" + dominio);
   xhttp.send();
}


