if( document.referrer.indexOf(window.location.origin+'/index.html') == "-1"){
    document.location.href = '../index.html';
} 

var btnRegistrar = document.getElementById('registrar');
var btnVer = document.getElementById('ver-partidos');
var nombre = document.getElementById('nombre');

const buscarParametrosURL = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(buscarParametrosURL.entries());

nombre.innerHTML = "Que bueno que estas aqui "+parametros.nombre;

btnRegistrar.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../interfaces/registro.html?id='+parametros.id+'&nombre='+parametros.nombre;
})

btnVer.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../interfaces/partidos.html?id='+parametros.id+'&nombre='+parametros.nombre;
})
