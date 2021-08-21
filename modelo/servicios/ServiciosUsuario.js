var formulario = document.getElementById('sign-in');

const URL = "http://localhost/campeonato_api/";

export default class ServiciosUsuario {    
       
    constructor(){}
    
    static async LogIn(datos) {
        return new Promise( function(resolve) {
            fetch(URL+'log-in.php',{
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: datos,
            })
            .then( res => res.json())
            .then( data => {
                resolve(data == false ? false : data.id);
            })
        });
    }  

    static AgregarUsuario() {
        return new Promise( function(resolve) {
            
            var equipos = [];
            
            fetch('http://localhost/campeonato_api/equipos.php',{
                method: 'GET',
                mode: 'cors',
            })
            .then( res => res.json())
            .then( data => {
                data.forEach(equipo => {
                    equipos.push(new Equipo(equipo.id, equipo.nombre));
                });
                resolve(equipos);
            })
        });
    }  
}

/*formulario.addEventListener('submit', function(e){

    e.preventDefault();

    var fomrData = new FormData(formulario);
    var datos = new FormData();

    datos.append("nombre",fomrData.get("nombre"));
    datos.append("correo",fomrData.get("correo"));
    datos.append("username",fomrData.get("username"));
    datos.append("password",fomrData.get("new-pass"));
    
    fetch(URL+'usuarios.php',{
        method: 'POST',
        mode: 'cors',
        body: datos,
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
    })
    
})*/


