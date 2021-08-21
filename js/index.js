import ServiciosUsuario from "../modelo/servicios/ServiciosUsuario.js";

var formulario = document.getElementById('log-in');
var btnSign = document.getElementById('sign');

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var datosFormulario = new FormData(formulario);
    var id = await ServiciosUsuario.LogIn(datosFormulario);
    id != false ? document.location.href = '../otra.html' : console.log("Imprimir algo");
})

btnSign.addEventListener('click', async function(e) {
    e.preventDefault();
    document.location.href = '../sign-in.html'
})

