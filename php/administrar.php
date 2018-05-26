<?php
 session_start();
 $usuario='root';
 $clave='';
 $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
 $usuarioPost=$_POST['usuario'];
 $passPost=$_POST['password'];

 $sql=$objetoPDO->prepare('SELECT id,password FROM login WHERE id=:id AND password=:password');

 $sql->bindParam(':id',$usuarioPost,PDO::PARAM_INT);
 $sql->bindParam(':password',$passPost,PDO::PARAM_STR);
 $sql->execute();
 while($objUsuario=$sql->fetch(PDO::FETCH_LAZY))
 {
     if($objUsuario->usuario==$usuarioPost && $objUsuario->password==$passPost){
         header('Location: localhost/team-3/index.html');
     }
 }
 header('Location: localhost/team-3/login/login.html');

?>