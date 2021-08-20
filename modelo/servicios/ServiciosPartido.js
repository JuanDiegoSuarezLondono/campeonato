import Partido from "../Partido.js";

export default class ServiciosPartido {    
    constructor(){}
    
    static ObtenerPartidos() {
        return new Promise( function(resolve) {
            
            var partidos = [];
            
            fetch('http://localhost/campeonato_api/partidos.php',{
                method: 'GET',
                mode: 'cors',
            })
            .then( res => res.json())
            .then( datos => {
                datos.forEach(partido => {
                    partidos.push(new Partido(partido.id, partido.fecha, partido.equipo_local, partido.equipo_visitante, partido.goles_local, partido.goles_visitante));
                });
                resolve(partidos);
            })
        });
    } 
    
    static AgregarPartido(datos) {
        return new Promise( function(resolve) {
                        
            fetch('http://localhost/campeonato_api/partidos.php',{
                method: 'POST',
                mode: 'cors',
                body: datos,
            })
            .then( res => res.json())
            .then( data => {
                console.log("Exito: "+data);
            })
        });
    } 
}
