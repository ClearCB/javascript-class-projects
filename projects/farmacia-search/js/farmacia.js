function consultaFiltro() {


    let filtro = document.getElementById("filtro").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText.length > 0) {

            lista = JSON.parse(this.responseText).farmacies;
            document.getElementById("lista").innerHTML = ("<caption>Farmacias</caption><tr><th>ID</th><th>Nombre</th><th>Municipio</th></tr>")

            for (let i = 0; i < lista.length; i++) {

                if (i % 2 == 0) {

                    document.getElementById("lista").innerHTML += ("<tr class='par'><td>" + lista[i]["id"] + " </td>" + "<td> " + lista[i]["nom"] + " </td>" + "<td> " + lista[i]["municipi"] + " </td>" + "</tr>")
                }

                if (i % 2 !== 0) {
                    document.getElementById("lista").innerHTML += ("<tr class='impar'><td>" + lista[i]["id"] + " </td>" + "<td> " + lista[i]["nom"] + " </td>" + "<td> " + lista[i]["municipi"] + " </td>" + "</tr>")
                }
            }

        }

    }

    xhttp.open("GET", "https://infocaib.com/farmacies/listado.php?text=" + filtro);
    xhttp.send();
}

function consultaMunicipio() {


    let filtro = document.getElementById("filtro").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText.length > 0) {

            lista = JSON.parse(this.responseText).farmacies;
            document.getElementById("lista").innerHTML = ("<caption>Farmacias</caption><tr><th>ID</th><th>Nombre</th><th>Municipio</th></tr>")

            for (let i = 0; i < lista.length; i++) {

                if (i % 2 == 0) {

                    document.getElementById("lista").innerHTML += ("<tr class='par'><td>" + lista[i]["id"] + " </td>" + "<td> " + lista[i]["nom"] + " </td>" + "<td> " + lista[i]["municipi"] + " </td>" + "</tr>")
                }

                if (i % 2 !== 0) {
                    document.getElementById("lista").innerHTML += ("<tr class='impar'><td>" + lista[i]["id"] + " </td>" + "<td> " + lista[i]["nom"] + " </td>" + "<td> " + lista[i]["municipi"] + " </td>" + "</tr>")
                }
            }

        }

    }

    xhttp.open("GET", "https://infocaib.com/farmacies/listado-municipio.php?municipio=" + filtro);
    xhttp.send();
}

function consultaFicha() {

    document.getElementById("lista").innerHTML = "";

    let filtro = document.getElementById("filtro").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText.length > 0) {

            farmaciaConsultada = JSON.parse(this.responseText);

            let info = "<tr>";

            for (let key in farmaciaConsultada) {

                info += ("<th>" + key + "</th>");

            }
            info += "</tr>";
            document.getElementById("lista").innerHTML += info;

            let farmacia = "<tr class='par'>";
            for (let key in farmaciaConsultada) {

                farmacia += ("<td>" + farmaciaConsultada[key] + "</td>");

            }
            farmacia += "</tr>";
            document.getElementById("lista").innerHTML += farmacia;

            muestra(farmaciaConsultada["latitud"],farmaciaConsultada["longitud"]);
        }

    }

    xhttp.open("GET", "https://infocaib.com/farmacies/ficha.php?id=" + filtro);
    xhttp.send();
}

function crearFilaElemento() {

    nuevaLinea = document.createElement("tr");

}

function crearColumnaElemento(fila) {

    nuevaColumna = document.createElement("td");

}

function muestra(Latitud, longitud) {
    var element = document.getElementById('mapa');

    // Create Leaflet map on map element.
    var map = L.map(element);

    // Add OSM tile layer to the Leaflet map.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; Farmacias S.A.' }).addTo(map);

    // Target's GPS coordinates.
    var target = L.latLng(Latitud,  longitud);

    // Set map's center to target with zoom 18.
    map.setView(target, 18);

    // Place a marker on the same location.
    L.marker(target).addTo(map)

};