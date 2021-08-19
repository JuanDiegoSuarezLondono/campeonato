package modelo;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Partido implements Serializable {

    private int partidoId;
    private Date fecha;
    private String equipoLocal;
    private String equipoVisitante;
    private int golesLocal;
    private int golesVisitante;

    public Partido(int partidoId, Date fecha, String equipoLocal, String equipoVisitante, int golesLocal, int golesVisitante) {
        this.partidoId = partidoId;
        this.fecha = fecha;
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }

    public int getPartidoId() {
        return partidoId;
    }

    public void setPartidoId(int partidoId) {
        this.partidoId = partidoId;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getEquipoLocal() {
        return equipoLocal;
    }

    public void setEquipoLocal(String equipoLocal) {
        this.equipoLocal = equipoLocal;
    }

    public String getEquipoVisitante() {
        return equipoVisitante;
    }

    public void setEquipoVisitante(String equipoVisitante) {
        this.equipoVisitante = equipoVisitante;
    }

    public int getGolesLocal() {
        return golesLocal;
    }

    public void setGolesLocal(int golesLocal) {
        this.golesLocal = golesLocal;
    }

    public int getGolesVisitante() {
        return golesVisitante;
    }

    public void setGolesVisitante(int golesVisitante) {
        this.golesVisitante = golesVisitante;
    }

    @Override
    public String toString() {
        String resultados = "";
        SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy");
        resultados = resultados+sdf.format(fecha)+" – "+equipoLocal+" ("+golesLocal+") VS ("+golesVisitante+") "+equipoVisitante;
        return resultados;
    }

}
