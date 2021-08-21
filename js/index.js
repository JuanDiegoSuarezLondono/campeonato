import ServiciosUsuario from "../modelo/servicios/ServiciosUsuario.js";

var formulario = document.getElementById('loginform');
var btnSign = document.getElementById('sign');

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var datosFormulario = new FormData(formulario);
    var usuario = await ServiciosUsuario.LogIn(datosFormulario);
    usuario != false ? document.location.href = '../interfaces/bienvenido.html?id='+usuario.id+'&nombre='+usuario.nombre : alert("La combinación usuario y contraseña no se encontró  :c");
})

btnSign.addEventListener('click', async function(e) {
    e.preventDefault();
    document.location.href = '../interfaces/sign-in.html'
})

