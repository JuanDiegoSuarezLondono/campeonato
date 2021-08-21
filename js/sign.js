import ServiciosUsuario from "../modelo/servicios/ServiciosUsuario.js";

var formulario = document.getElementById('sign-in');

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    var formData = new FormData(formulario);
    if(formData.get("new-pass") == formData.get("conf-new-pass")) {
        var datos = new FormData();
        datos.append("nombre",formData.get("nombre"));
        datos.append("correo",formData.get("correo"));
        datos.append("username",formData.get("username"));
        datos.append("password",formData.get("new-pass"));
        ServiciosUsuario.AgregarUsuario(datos);
        document.location.href = '../index.html';
    } else {
        console.log("Nel pastel");
    }
    
})

