var btnRegistrar = document.getElementById('registrar');
var btnVer = document.getElementById('ver-partidos');

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if(document.referrer != 'http://127.0.0.1:8080/index.html'){
    document.location.href = '../index.html';
}

btnRegistrar.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../registro.html?id='+params.id;
})

btnVer.addEventListener("click", async function(e) {
    e.preventDefault();
    document.location.href = '../partidos.html';
})
