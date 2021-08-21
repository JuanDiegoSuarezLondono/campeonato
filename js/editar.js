import ServiciosPartido from "../modelo/servicios/ServiciosPartido.js";

var formulario = document.getElementById('editar');
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var datosFormulario = new FormData(formulario);
    var data = {
        'id' : params.id,
        'goles_local' : datosFormulario.get("goles_local"),
        'goles_visitante' : datosFormulario.get("goles_visitante"),
    };
    ServiciosPartido.EditarPartido(data);
    document.location.href = '../partidos.html';
})