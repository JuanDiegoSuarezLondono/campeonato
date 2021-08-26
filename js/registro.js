if( document.referrer.indexOf(window.location.origin+'/interfaces/partidos.html') == "-1" && document.referrer.indexOf(window.location.origin+'/interfaces/bienvenido.html') == "-1" && document.referrer.indexOf(window.location.origin+'/interfaces/bienvenido.html') == "-1"){
    document.location.href = '../index.html';
} 

import ServiciosEquipo from "../modelo/servicios/ServiciosEquipo.js";
import ServiciosPartido from "../modelo/servicios/ServiciosPartido.js";

var formulario = document.getElementById('registro');
const buscarParametrosURL = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(buscarParametrosURL.entries());

window.onload = async function(){
    var selectLocal = document.getElementById('select-local');
    var selectVisitante = document.getElementById('select-visitante');
    var equipos  = await ServiciosEquipo.ObtenerEquipos();
    equipos.forEach(equipo => {
        var elementLoc = document.createElement("option");
        elementLoc.textContent = equipo.nombre;
        elementLoc.value = equipo.id;
        selectLocal.appendChild(elementLoc);
        var elementVis = document.createElement("option");
        elementVis.textContent = equipo.nombre;
        elementVis.value = equipo.id;
        selectVisitante.appendChild(elementVis);
    });
};

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var selectLocal = document.getElementById('select-local').value;
    var selectVisitante = document.getElementById('select-visitante').value;
    var datosFormulario = new FormData(formulario);
    var datos = new FormData();
    datos.append("usuario",parametros.id);
    datos.append("local",selectLocal);
    datos.append("visitante",selectVisitante);
    datos.append("fecha",datosFormulario.get("fecha"));
    ServiciosPartido.AgregarPartido(datos);
    document.location.href = '../interfaces/partidos.html?id='+parametros.id+'&nombre='+parametros.nombre;
})