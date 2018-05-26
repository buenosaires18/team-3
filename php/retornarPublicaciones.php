<?php
$fecha = date("m-d-y");
try{
    $bandera=0;
    $usuario='root';
    $clave='team3db';
    $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
    $sql=$objetoPDO->prepare('SELECT * FROM `posts`');
    $sql->execute();
    while($result = $sql->fetchAll()){
        return json_encode($result);
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