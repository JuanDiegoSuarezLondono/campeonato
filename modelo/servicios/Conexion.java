package modelo.servicios;

import java.sql.*;

public class Conexion {
    protected static Connection conexion;
    private static final String URL = "jdbc:mysql://localhost:3306/bd_campeonato";
    private static final String USER = "root";
    private static final String PASS = "";

    public Conexion() {
        conexion = null;
    }

    public static Connection Obtener() throws SQLException{
        try {
            conexion = DriverManager.getConnection(URL, USER, PASS);
        } catch (SQLException ex) {
            throw new SQLException(ex);
        }
        return conexion;
    }
    public static void Cerrar() throws SQLException {
        if (conexion != null) {
            conexion.close();
        }
    }
}
