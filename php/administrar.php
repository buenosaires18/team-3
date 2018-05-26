    <?php
    session_start();
    $usuario = 'root';
    $clave = 'team3db';
    $usuarioPost = $_POST['usuario'];
    $passPost = $_POST['password'];

    $objetoPDO = new PDO('mysql:host=localhost;dbname=pescardb;charset=utf8', $usuario, $clave);
    $sql = $objetoPDO->prepare('SELECT `usuario`,`password` FROM `login` WHERE `usuario` = :usuario AND `password` = :password');
    $sql->bindValue(':usuario', $usuarioPost);
    $sql->bindValue(':password', $passPost);
    $sql->execute();

    $dataUsuario=$sql->fetchObject();

    $resultado = $sql->rowCount();
    if ($resultado) {
        $_SESSION['usuario']=$dataUsuario->usuario;
        header('Location: ../index.html');
    } else {
        header('Location: ../login/login.html');
    }

    ?>