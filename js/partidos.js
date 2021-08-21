import ServiciosPartido from "../modelo/servicios/ServiciosPartido.js";

window.onload = async function(){
    var partidos  = await ServiciosPartido.ObtenerPartidos();

    var selectLocal = document.getElementById('tabla-partidos');

    partidos.forEach(partido => {
        var fila = document.createElement("tr");
        var fecha = document.createElement("td");
        var local = document.createElement("td");
        var golLocal = document.createElement("td");
        var visitante = document.createElement("td");
        var golVisitante = document.createElement("td");
        fecha.textContent = partido.fecha;
        local.textContent = partido.local;
        golLocal.textContent = partido.golesLocal;
        visitante.textContent = partido.visitante;
        golVisitante.textContent = partido.golesVisitante;
        fila.id = partido.id;
        fila.appendChild(fecha);
        fila.appendChild(local);
        fila.appendChild(golLocal);
        fila.appendChild(visitante);
        fila.appendChild(golVisitante);
        selectLocal.appendChild(fila);
        fila.addEventListener("click", async function(e) {
            e.preventDefault();
            document.location.href = '../editar_partido.html?id='+fila.id;
        })
    });

};

