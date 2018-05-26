<?php

 $usuario='root';
 $clave='';
 $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
 $usuarioPost=$_POST['usuario'];
 $passPost=$_POST['password'];

 $sql=$objetoPDO->prepare('SELECT id,password FROM login  WHERE id');

 $sql->bindParam(':id',$usuarioPost,PDO::PARAM_INT);
 $sql->bindParam(':password',$passPost,PDO::PARAM_STR);
 
 while($objUsuario=$sql->fetch(PDO::FETCH_LAZY))
 {
     if($objUsuario==$usuarioPost && $objUsuario==$passPost){
         header('Location: localhost/team-3/index.html');
     }
     else
     {
         header('Location: localhost/team-3/login.html');
     }
 }


?>