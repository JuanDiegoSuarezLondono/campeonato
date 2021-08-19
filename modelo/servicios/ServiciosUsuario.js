var formulario = document.getElementById('sign-in');

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    console.log(formulario);

    var fomrData = new FormData(formulario);
    var datos = new FormData();

    datos.append("nombre",fomrData.get("nombre"));
    datos.append("correo",fomrData.get("correo"));
    datos.append("username",fomrData.get("username"));
    datos.append("password",fomrData.get("new-pass"));
    
    fetch('http://localhost/campeonato_api/usuarios.php',{
        method: 'POST',
        mode: 'cors',
        body: datos,
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
    })
    
})


