<?php 

    class conexion{

  
	    public function getConexion(){

	     $conexion = new PDO("mysql:host=localhost; dbname=championsgo; charset-utf8;", "root", "");
	     $conexion->exec("set names utf8");
	     return $conexion;

	    }

     }

 ?>