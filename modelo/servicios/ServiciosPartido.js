import Partido from "../Partido.js";

export default class ServiciosPartido {    
    constructor(){}
    
    static obtenerPartidos() {
        return new Promise( function(resolve) {
            
            var partidos = [];
            
            fetch('http://localhost/campeonato_api/partidos.php',{
                method: 'GET',
                mode: 'cors',
            })
            .then( res => res.json())
            .then( datos => {
                datos.forEach(partido => {
                    partidos.push(new Partido(partido.id, partido.usuario, partido.Partido));
                });
                resolve(partidos);
            })
        });
    } 
    
    static agregarPartido(datos) {
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


/*
public class ServiciosPartido extends Conexion {

    public List<Partido> ObtenerPartidos() throws SQLException, ClassNotFoundException, ParseException {
        List<Partido> partidos = new ArrayList<>();
        Statement statement = Obtener().createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT p.partidos_id, p.fecha, p.nombre_visitante, e.nombre as nombre_local, p.goles_visitante, p.goles_local\n" +
                "FROM (\n" +
                "\tSELECT p.partidos_id, p.fecha, e.nombre as nombre_visitante, p.equipo_local_id, p.goles_visitante, p.goles_local\n" +
                "\tFROM bd_campeonato.partidos AS p\n" +
                "\tINNER JOIN bd_campeonato.equipos AS e ON p.equipo_visitante_id=e.equipos_id \n" +
                ") AS p\n" +
                "INNER JOIN bd_campeonato.equipos AS e ON p.equipo_local_id=e.equipos_id \n" +
                "ORDER BY p.fecha DESC");
        while (resultSet.next()) {
            Date date = new SimpleDateFormat("yyyy-MM-dd").parse(resultSet.getString(2));
            partidos.add( new Partido(Integer.parseInt(resultSet.getString(1)),date,resultSet.getString(4),resultSet.getString(3),Integer.parseInt(resultSet.getString(5)),Integer.parseInt(resultSet.getString(6))));
        }
        Cerrar();
        return partidos;
    }

    public void AgregarPartido( int ano, int mes, int dia, int idLocal, int idVisitante, int golLocal, int golVisitante) throws SQLException, ClassNotFoundException {
        String fecha = ano +"-"+ mes +"-"+ dia;
        PreparedStatement statement = Obtener().prepareStatement("INSERT INTO bd_campeonato.partidos (`fecha`, `equipo_local_id`, `equipo_visitante_id`, `goles_visitante`, `goles_local`) VALUES ( ?, ?, ?, ?, ?)");
        statement.setString(1, fecha);
        statement.setInt(2, idLocal);
        statement.setInt(3, idVisitante);
        statement.setInt(4, golVisitante);
        statement.setInt(5, golLocal);
        statement.execute();
        Cerrar();
    }

    @Override
    public String toString() {
        return "ServiciosPartido{}";
    }
}*/