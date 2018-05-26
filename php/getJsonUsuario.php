<?php
session_start();
$usuario = 39906650;
//$usuario = $_SESSION['usuario'];
try{
    $bandera=0;
    $usuario='root';
    $clave='';
    $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
    $sql=$objetoPDO->prepare('SELECT * FROM `personas` WHERE `dni` = :usuario');
    $sql->bindValue(':usuario', $usuario);
    $sql->execute();
    while($result = $sql->fetchObject()){
        echo var_dump($result);
        $bandera=1;
    }
    if($bandera==0)
    {
        echo "No se encontro el usuario";
    }
}
catch(PDOException $e) {
    echo "Error!\n" . $e->getMessage();
}