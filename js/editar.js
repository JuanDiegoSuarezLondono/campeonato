if(document.referrer.substring(0,46) != window.location.origin+'/interfaces/partidos.html'){
    document.location.href = '../index.html';
}

import ServiciosPartido from "../modelo/servicios/ServiciosPartido.js";

var formulario = document.getElementById('editar');
var btnBorrar = document.getElementById('borrar');

const buscarParametrosURL = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(buscarParametrosURL.entries());

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var datosFormulario = new FormData(formulario);
    var data = {
        'id' : parametros.fid,
        'goles_local' : datosFormulario.get("goles_local"),
        'goles_visitante' : datosFormulario.get("goles_visitante"),
    };
    ServiciosPartido.EditarPartido(data);
    document.location.href = '../interfaces/partidos.html?id='+parametros.id+'&nombre='+parametros.nombre;
})
btnBorrar.addEventListener('click', async function(e) {
    e.preventDefault();
    var data = {
        'id' : parametros.fid,
    };
    ServiciosPartido.BorrarPartido(data);
    document.location.href = '../interfaces/partidos.html?id='+parametros.id+'&nombre='+parametros.nombre;
})