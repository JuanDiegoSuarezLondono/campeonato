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
        var res = await ServiciosUsuario.AgregarUsuario(datos);
        res == false ? alert("El correo o el nombre de usuario ya esta en uso") : document.location.href = '../index.html';
    } else {
        alert("Las contraseñas deben coincidir.");
    }
    
})

