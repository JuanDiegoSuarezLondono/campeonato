const mysql = require('mysql');

class ServiciosEquipo {

    constructor(){
    }

    static obtenerEquipos()  {

        var equipos = [];

        const conexion = mysql.createConnection ({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bd_campeonato',
        })

        conexion.connect( (err) =>{
            if(err) throw err
            console.log('Exito')
        }),
        
        conexion.query('SELECT * FROM equipos', (err,resultado) =>{
            if(err) throw err
            resultado.forEach(equipo => equipos.push(equipo.id)); 
        })
        
        conexion.end()
        
    }

    
}

let servEquip = new ServiciosEquipo();

ServiciosEquipo.obtenerEquipos();









