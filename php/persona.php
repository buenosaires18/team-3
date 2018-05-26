<?php
class Persona{
    public $dni;
    public $nombre;
    public $fechaNacimiento;
    public $nacionalidad;
    public $email;
    public $twitter;
    public $instagram;
    public $linkedin;
    public $calle;
    public $ciudad;
    public $provincia;
    public $codigoPostal;
    public $celular;
    public $apellido;
    public $escuela;

    public function __construct($dni,$nombre, $apellido, $fechaNacimiento, $nacionalidad, $email, $twitter, $instagram, $linkedin, $calle, $ciudad, $provincia, $codigoPostal, $celular, $apellido, $escuela){
    $this->dni = $dni;
    $this->nombre = $nombre;
    $this->fechaNacimiento = $fechaNacimiento;
    $this->nacionalidad = $nacionalidad;
    $this->email = $email;
    $this->twitter = $twitter;
    $this->instagram = $instagram;
    $this->linkedin = $linkedin;
    $this->calle = $calle;
    $this->ciudad = $ciudad;
    $this->provincia = $provincia;
    $this->codigoPostal = $codigoPostal;
    $this->celular = $celular;
    $this->apellido = $apellido;
    $this->escuela = $escuela;
    }
}