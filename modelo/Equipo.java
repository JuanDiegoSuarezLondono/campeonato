package modelo;

import java.io.*;

public class Equipo implements Serializable {

    private int equipoId;
    private String nombre;

    public Equipo(int equipoId, String nombre) {
        this.equipoId = equipoId;
        this.nombre = nombre;
    }

    public int getEquipoId() {
        return equipoId;
    }

    public void setEquipoId(int equipoId) {
        this.equipoId = equipoId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Equipo{" +
                "equipoId=" + equipoId +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
