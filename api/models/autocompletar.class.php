<?php 

   require_once "conexion.class.php";
 
    class autocompletar{
  
	   public $con;

	   public function __construct(){
		  
		$conexion = new conexion();
		$this->con = $conexion->getConexion();

	    }
       
       public function autocompletarTorneos(){
       
        $sql = "SELECT * FROM torneos WHERE disponible=1 AND estado=1 ORDER BY id_torneo DESC";
        $query = $this->con->prepare($sql);
        $query->execute();
        $arreglo = array();

        foreach ($query as $torneo) {
   	     $arreglo[] =  $torneo['nombre_torneo'];
       
        }

        return $arreglo;



      } 



    }


  /* $ob = new autocompletar();
   print_r($ob->autocompletarTorneos());*/
  



 ?>