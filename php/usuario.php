<?php
class Usuario{
    public $dni;
    public $nombre;
    public $apellido;
    public $escuela;
    public $password;

    public function __construct($dni,$nombre,$apellido,$escuela,$password){
        $this->dni=$dni;
        $this->nombre=$nombre;
        $this->apellido=$apellido;
        $this->escuela=$escuela;
        $this->password=$password;
    }
}