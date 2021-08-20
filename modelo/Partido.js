export default class Partido {

    constructor(id, usuario, local, visitante, fecha, golesLocal, golesVisitante) {
        this.id = id;
        this.usuario = usuario;
        this.local = local;
        this.visitante = visitante;
        this.fecha = fecha;
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }

}


/*
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

    @Override
    public String toString() {
        String resultados = "";
        SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy");
        resultados = resultados+sdf.format(fecha)+" – "+equipoLocal+" ("+golesLocal+") VS ("+golesVisitante+") "+equipoVisitante;
        return resultados;
    }

}*/
