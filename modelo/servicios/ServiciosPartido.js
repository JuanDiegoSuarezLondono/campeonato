import Partido from "../Partido.js";

const URL = 'http://localhost/campeonato_api/partidos.php';

export default class ServiciosPartido {    

    constructor(){}
    
    static async ObtenerPartidos() {
        return new Promise( function(resolve) {
            var partidos = [];
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
                data.forEach(partido => {
                    partidos.push(new Partido(partido.id, partido.fecha, partido.equipo_local, partido.equipo_visitante, partido.goles_local, partido.goles_visitante));
                });
                resolve(data == false ? false : partidos);
            })
        });
    } 
    
    static async AgregarPartido(datos) {
        return new Promise( function(resolve) {                
            fetch(URL,{
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
                resolve(data == false ? false : data);
            })
        });
    } 

    static async EditarPartido(datos) {
        return new Promise(function (resolve) {
            fetch(URL, {
                method: 'PUT',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify({
                    "payload": datos
                  })
            })
            .then( res => res.json())
            .then( data => {
                resolve(data == false ? false : data);
            })
        });
    }
    
    static async BorrarPartido(datos) {
        return new Promise(function (resolve) {
            fetch(URL, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify({
                    "payload": datos
                  })
            })
            .then( res => res.json())
            .then( data => {
                resolve(data == false ? false : data);
            })
        });
    } 
}
