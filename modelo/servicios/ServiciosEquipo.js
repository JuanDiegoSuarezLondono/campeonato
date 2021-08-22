import Equipo from "../Equipo.js";

const URL = window.location.origin+'/campeonato_api/equipos.php';

export default class ServiciosEquipo {    
       
    constructor(){}
    
    static ObtenerEquipos() {
        return new Promise( function(resolve) {
            var equipos = [];
            fetch(URL,{
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            .then( res => res.json())
            .then( data => {
                data.forEach(equipo => {
                    equipos.push(new Equipo(equipo.id, equipo.nombre));
                });
                resolve(data == false ? false : equipos);
            })
        });
    }  
}

