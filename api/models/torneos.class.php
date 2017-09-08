<?php 
  
    require_once "conexion.class.php";
 
    class torneos{
  
	   public $con;

	   public function __construct(){
		  
		$conexion = new conexion();
		$this->con = $conexion->getConexion();

	    }

	   public function registrarTorneo($nombre, $equipos, $fecha, $zona, $logo, $id_user){
     
        $sql = "INSERT INTO torneos 
        (nombre_torneo, numero_equipos, equipos_inscritos, fecha_creacion, zona, logo, id_usuario, estado) 
        VALUES (:nombre, :equipos, 0, :fecha, :zona, :logo, :id_user, 1)";
        
        $query = $this->con->prepare($sql);
        $query->bindParam(":nombre", $nombre);
        $query->bindParam(":equipos", $equipos);
        $query->bindParam(":fecha", $fecha);
        $query->bindParam(":zona", $zona);
        $query->bindParam(":logo", $logo);
        $query->bindParam(":id_user", $id_user);
        $query->execute();




	  }  
  


     }

  /* $ob = new usuarios();
   $ob->registrarTorneo("probando", 8, "07-09-2017", "Medellín", "prueba.jpg", 1);*/


 ?>