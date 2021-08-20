import ServiciosEquipo from "../modelo/servicios/ServiciosEquipo.js";

var formulario = document.getElementById('log-in');

window.onload = async function(){

    var selectLocal = document.getElementById('select-local');
    var selectVisitante = document.getElementById('select-visitante');
    var equipos  = await ServiciosEquipo.obtenerEquipos();

    equipos.forEach(equipo => {
        var elementLoc = document.createElement("option");
        elementLoc.textContent = equipo.nombre;
        elementLoc.value = equipo;
        selectLocal.appendChild(elementLoc);
        var elementVis = document.createElement("option");
        elementVis.textContent = equipo.nombre;
        elementVis.value = equipo;
        selectVisitante.appendChild(elementVis);
    });

    var lengthOfName = "name.length";

    document.getElementById('output').innerHTML = lengthOfName;
};



formulario.addEventListener('submit', async function(e) {

    e.preventDefault();

    var datos = new FormData(formulario);

    console.log("Ahhhhhhhhhhhh");
         
    
})