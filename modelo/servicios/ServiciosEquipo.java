package modelo.servicios;

import modelo.Equipo;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

public class ServiciosEquipo extends Conexion{
    
    public List<Equipo> ObtenerEquipos() throws SQLException{
        List<Equipo> equipos = new ArrayList<>();
        Statement statement = Obtener().createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM equipos");
        while (resultSet.next()) {
            equipos.add( new Equipo(Integer.parseInt(resultSet.getString(1)),resultSet.getString(2)));
        }
        Cerrar();
        return equipos;
    }

    public void AgregarEquipo( String nombre) throws SQLException, ClassNotFoundException {
        nombre = nombre == null ? "" : nombre;
        PreparedStatement statement = Obtener().prepareStatement("INSERT INTO bd_campeonato.equipos (`nombre`) VALUES ( ?)");
        statement.setString(1, nombre);
        statement.execute();
        Cerrar();
    }

    public void ActualizarEquipo(int id, String nombre) throws SQLException, ClassNotFoundException {
        nombre = nombre == null ? "" : nombre;
        PreparedStatement statement = Obtener().prepareStatement("UPDATE bd_campeonato.equipos SET `nombre` = ? WHERE (`id` = ?)");
        statement.setString(1, nombre);
        statement.setString(2, String.valueOf(id));
        statement.execute();
        Cerrar();
    }

    public void Eliminar(int id) throws SQLException, ClassNotFoundException {
        PreparedStatement statement = Obtener().prepareStatement("DELETE FROM bd_campeonato.equipos WHERE (`id` = ?)");
        statement.setString(1, String.valueOf(id));
        statement.execute();
        Cerrar();
    }
}
