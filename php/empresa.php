<?php
class Usuario{
    public $cuit;
    public $nombre;
    public $apellido;
    public $rubro;
    public $password;

    public function __construct($cuit,$nombre,$apellido,$rubro,$password){
        $this->cuit=$cuit;
        $this->nombre=$nombre;
        $this->apellido=$apellido;
        $this->rubro=$rubro;
        $this->password=$password;
    }
}