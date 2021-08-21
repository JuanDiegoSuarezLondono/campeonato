import ServiciosUsuario from "../modelo/servicios/ServiciosUsuario.js";

var formulario = document.getElementById('sign-in');

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var datosFormulario = new FormData(formulario);
    if(datosFormulario.get("new-pass") == datosFormulario.get("conf-new-pass")) {
        var datos = new FormData();
        datos.append("nombre",datosFormulario.get("nombre"));
        datos.append("correo",datosFormulario.get("correo"));
        datos.append("username",datosFormulario.get("username"));
        datos.append("password",datosFormulario.get("new-pass"));
        ServiciosUsuario.AgregarUsuario(datos);
        document.location.href = '../index.html';
    } else {
        console.log("Contraseñas diferentes");
    }
    
})

