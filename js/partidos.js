if( document.referrer.indexOf(window.location.origin+'/interfaces/registro.html') == "-1" && document.referrer.indexOf(window.location.origin+'/interfaces/editar_partido.html') == "-1" && document.referrer.indexOf(window.location.origin+'/interfaces/bienvenido.html') == "-1"){
    document.location.href = '../index.html';
} 

import ServiciosPartido from "../modelo/servicios/ServiciosPartido.js";

var btnAgregar = document.getElementById('agregar');

const buscarParametrosURL = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(buscarParametrosURL.entries());

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
            document.location.href = '../interfaces/editar_partido.html?fid='+fila.id+'&id='+parametros.id+'&nombre='+parametros.nombre;
        })
    });

};

btnAgregar.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../interfaces/registro.html?id='+parametros.id+'&nombre='+parametros.nombre;
})