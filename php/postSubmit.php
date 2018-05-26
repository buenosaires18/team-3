<?php
$empresa = $_POST['empresa'];
$post = $_POST['post'];
$fecha = date("m-d-y");
try{
    $bandera=0;
    $usuario='root';
    $clave='team3db';
    $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
    $sql=$objetoPDO->prepare('INSERT INTO `personas`(`nombreEmpresa`,`post`,`fecha`) VALUES (:empresa,:post,:fecha)');
    $sql->bindValue(':nombreEmpresa', $empresa);
    $sql->bindValue(':post', $post);
    $sql->bindValue(':fecha', $fecha);
    $sql->execute();
    if($result = $sql->fetchObject()){
        echo json_encode($result);
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