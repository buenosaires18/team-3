<?php
echo date("d-m-y");

$empresa = $_POST['empresa'];
$post = $_POST['posteo'];
$fecha = date("d-m-y");
try{
    $bandera=0;
    $usuario='root';
    $clave='team3db';
    $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
    $sql=$objetoPDO->prepare('INSERT INTO `posts`(`nombreEmpresa`,`post`,`fecha`) VALUES (:nombreEmpresa,:post,:fecha)');
    $sql->bindValue(':nombreEmpresa', $empresa);
    $sql->bindValue(':post', $post);
    $sql->bindValue(':fecha', $fecha);
    $sql->execute();
}
catch(PDOException $e) {
    echo "Error!\n" . $e->getMessage();
}