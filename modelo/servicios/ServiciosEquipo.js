import Equipo from "../Equipo.js";

export default class ServiciosEquipo {    
       
    constructor(){}
    
    static obtenerEquipos() {
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

