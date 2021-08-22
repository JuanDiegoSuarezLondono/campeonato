<?php
include "config.php";
include "conexion.php";

header('Access-Control-Allow-Origin: '.$urlPermision);
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("access-control-allow-headers: content-type");

$dbConn =  connect($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    $hash = substr(hash('sha256', $password), -0,10);

    $sql = "
        SELECT id, nombre
        FROM bd_campeonato.usuarios
        WHERE correo = :usuario AND password = :id
        UNION
        SELECT id, nombre
        FROM bd_campeonato.usuarios
        WHERE username = :usuario AND password = :id";
    $statement = $dbConn->prepare($sql);
    $statement->bindValue(':usuario', $usuario, PDO::PARAM_STR);
    $statement->bindValue(':id', $hash, PDO::PARAM_STR);
    $statement->execute();
    $res = $statement->fetch(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $res );
    exit();
}

?>