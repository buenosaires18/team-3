<?php
class Usuario{
    public $nombre;
    public $password;

    public function __construct($nombre,$password){
        $this->nombre=$nombre;
        $this->password=$password;
    }
}