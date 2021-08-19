var formulario = document.getElementById('formulario');

import ('../Equipo');

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    var datos = new FormData(formulario);
    
    ServiciosEquipo.obtenerEquipos();
    /*fetch('http://localhost/campeonato_api/equipos.php',{
        method: 'POST',
        mode: 'cors',
        body: datos,
    })
    .then( res => res.json())
    .then( data => {
        console.log(data[1].nombre);
    })*/
    
})

class ServiciosEquipo {
    
    constructor(){}
    
    static obtenerEquipos()  {
        
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
            return equipos;
        })
    }   
}

