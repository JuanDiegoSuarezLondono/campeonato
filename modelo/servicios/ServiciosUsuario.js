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

    static AgregarUsuario(datos) {
        return new Promise( function(resolve) {
            
            fetch(URL+'usuarios.php',{
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
                console.log(data);
            });
        });
    }
}