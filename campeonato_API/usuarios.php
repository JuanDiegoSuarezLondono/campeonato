<?php
include "config.php";
include "conexion.php";

header('Access-Control-Allow-Origin: '.$urlPermision);
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("access-control-allow-headers: content-type");

$dbConn =  connect($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
  $sql = $dbConn->prepare("SELECT nombre,correo,username FROM usuarios");
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

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hash = substr(hash('sha256', $password), -0,10);
    $sqlVer = $dbConn->prepare("
      SELECT id
      FROM usuarios
      WHERE correo = :correo
      UNION
      SELECT id
      FROM usuarios
      WHERE username = :username
    ");
    $sqlVer->bindValue(':correo', $correo, PDO::PARAM_STR);
    $sqlVer->bindValue(':username', $username, PDO::PARAM_STR);
    $sqlVer->execute();
    $res = $sqlVer->fetchAll();
    if( $res != []) {
      echo json_encode( false );      
    } else {
      $sql = "INSERT INTO bd_campeonato.usuarios
          (nombre, correo, username, password)
          VALUES
          (:nombre, :correo, :username, :password)";
        $statement = $dbConn->prepare($sql);
        $statement->bindValue(':nombre', $nombre, PDO::PARAM_STR);
        $statement->bindValue(':correo', $correo, PDO::PARAM_STR);
        $statement->bindValue(':username', $username, PDO::PARAM_STR);
        $statement->bindValue(':password', $hash, PDO::PARAM_STR);
        $statement->execute();
        $postId = $dbConn->lastInsertId();
        if($postId)
        {
          $input['id'] = $postId;
          $input['password'] = "";
          echo json_encode($input);
        }
        else {
          echo json_encode("Solicitud truncada");
        }
    }
    header("HTTP/1.1 200 OK");
    exit();
    
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
	$id = $_GET['id'];
    $statement = $dbConn->prepare("DELETE FROM usuarios where id=:id");
    $statement->bindValue(':id', $id);
    $statement->execute();
	header("HTTP/1.1 200 OK");
	exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $input = $_GET;
    $postId = $input['id'];
    $fields = getParams($input);
    $sql = "
          UPDATE usuarios
          SET $fields
          WHERE id='$postId'
           ";
    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);
    $statement->execute();
    header("HTTP/1.1 200 OK");
    exit();
}

?>