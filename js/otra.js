var btnRegistrar = document.getElementById('registrar');
var btnVer = document.getElementById('ver-partidos');

btnRegistrar.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../registro.html';
})

btnVer.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../partidos.html';
})
