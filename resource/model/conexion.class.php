<?php 
  
    class Conexion{

     

    public function Conectar(){

    $Conexion = new PDO("mysql:host=localhost;dbname=aprendiendo;", "root", "");   
    
    return $Conexion;
     
    }

  
    }

   
 ?>