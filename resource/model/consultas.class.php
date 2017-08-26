<?php 
 
 require_once "conexion.class.php";
 


    class Consulta{
    

        $Con   = new Conexion();
        $Conn  = $Con->Conectar();

       public function consultarPais(){
    
       
       $sql   = "SELECT *FROM paises";
       $query = $Conn->prepare($sql);
       $query->execute();

       return $query;


    }


  }

  



 ?>