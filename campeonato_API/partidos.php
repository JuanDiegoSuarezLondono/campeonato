<?php
include "config.php";
include "conexion.php";

header('Access-Control-Allow-Origin: '.$urlPermision);
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("access-control-allow-headers: content-type");

$dbConn =  connect($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['id']))
    {
      $sql = $dbConn->prepare("
      SELECT p.id, p.fecha, p.equipo_local, e.nombre as equipo_visitante, p.goles_local, p.goles_visitante
        FROM (
          SELECT p.id, p.fecha, e.nombre as equipo_local, p.visitante, p.goles_local, p.goles_visitante
            FROM bd_campeonato.partidos as p
            INNER JOIN bd_campeonato.equipos AS e
            ON p.local = e.id
            WHERE p.id=:id
        ) AS p
      INNER JOIN bd_campeonato.equipos AS e ON p.visitante=e.id 
      ORDER BY p.fecha DESC");
      $sql->bindValue(':id', $_GET['id']);
      $sql->execute();
      $res = $sql->fetch(PDO::FETCH_ASSOC);
      if ($res != "") {
        header("HTTP/1.1 200 OK");
      } else {
        header("HTTP/1.1 204 No Content");
      }
      echo json_encode( $res );
      exit();
	  }
    else {
      $sql = $dbConn->prepare("
      SELECT p.id, p.fecha, p.equipo_local, e.nombre as equipo_visitante, p.goles_local, p.goles_visitante
        FROM (
          SELECT p.id, p.fecha, e.nombre as equipo_local, p.visitante, p.goles_local, p.goles_visitante
            FROM bd_campeonato.partidos as p
            INNER JOIN bd_campeonato.equipos AS e
            ON p.local = e.id
        ) AS p
      INNER JOIN bd_campeonato.equipos AS e ON p.visitante=e.id 
      ORDER BY p.fecha DESC");
      $sql->execute();
      $res = $sql->setFetchMode(PDO::FETCH_ASSOC);
      if ($res != "") {
        header("HTTP/1.1 200 OK");
      } else {
        header("HTTP/1.1 204 No Content");
      }
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $sql = "INSERT INTO partidos
          (usuario, local, visitante, fecha)
          VALUES
          (:usuario, :local, :visitante, :fecha)";
    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);
    $statement->execute();
    $postId = $dbConn->lastInsertId();
    if($postId)
    {
      $input['id'] = $postId;
      header("HTTP/1.1 200 OK");
      echo json_encode($input);
      exit();
	 }
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
  $contenido= trim(file_get_contents("php://input"));
  $decodificar = json_decode($contenido, true);
  $input = $decodificar["payload"];
  $id = $input['id'];
    $statement = $dbConn->prepare("DELETE FROM partidos where id=:id");
    $statement->bindValue(':id', $id);
    $statement->execute();
	header("HTTP/1.1 200 OK");
	exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
  $contenido= trim(file_get_contents("php://input"));
  $decodificar = json_decode($contenido, true);
  $input = $decodificar["payload"];
  $postId = $input['id'];
  $fields = getParams($input);
  $sql = "
        UPDATE partidos
        SET $fields
        WHERE id='$postId'
      ";
  $statement = $dbConn->prepare($sql);
  bindAllValues($statement, $input);
  $statement->execute();
  header("HTTP/1.1 200 OK");
  echo json_encode($input);
  exit();
}

?>