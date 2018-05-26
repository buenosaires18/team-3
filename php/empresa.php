<?php
class Usuario{
    public $nombre;

    public function __construct($nombre,$password){
        $this->nombre=$nombre;
    }
}