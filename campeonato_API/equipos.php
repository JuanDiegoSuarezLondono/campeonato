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
      $sql = $dbConn->prepare("SELECT * FROM equipos where id=:id");
      $sql->bindValue(':id', $_GET['id']);
      $sql->execute();
      $res = $sql->fetch(PDO::FETCH_ASSOC);
      if ($res != "") {
        header("HTTP/1.1 200 OK");
      } else {
        header("HTTP/1.1 204 No Content");
      }
      echo json_encode($res);
      exit();
	  }
    else {
      $sql = $dbConn->prepare("SELECT * FROM equipos");
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
    $sql = $dbConn->prepare(
      "INSERT INTO equipos
      (nombre)
      VALUES
      (:nombre)");
    bindAllValues($sql, $input);
    $sql->execute();
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
	$id = $_GET['id'];
  $sql = $dbConn->prepare("DELETE FROM equipos where id=:id");
  $sql->bindValue(':id', $id);
  $sql->execute();
	header("HTTP/1.1 200 OK");
	exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $input = $_GET;
    $id = $_GET['id'];
    $nombre = $_GET['nombre'];
    $sql = $dbConn->prepare("
          UPDATE equipos
          SET nombre=:nombre
          WHERE id=:id
           ");
    $sql->bindValue(':id', $id, PDO::PARAM_INT);
    $sql->bindValue(':nombre', $nombre, PDO::PARAM_STR);
    $sql->execute();
    header("HTTP/1.1 200 OK");
    exit();
}

?>