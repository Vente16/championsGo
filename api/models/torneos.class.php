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

	    public function consultarTorneosUser($id_user){
        
        $sql = "SELECT * FROM torneos WHERE id_usuario=:id_user AND estado=1 ORDER BY id_torneo DESC";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_user", $id_user);
        $query->execute();
        $json = array();

        foreach ($query as $info) {
           $json[] = $info;
        }

        return $json;
	     
	    }

        public function consultarTorneoId($id_torneo){
        
        $sql = "SELECT * FROM torneos WHERE id_torneo=:id_torneo";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_torneo", $id_torneo);
        $query->execute();
        $json = array();

        foreach ($query as $info) {
           $json[] = $info;
        }

        return $json;
         

        }

        public function actualizarDatos($nombre, $numero_equipos, $zona, $id_torneo){
         
        $sql = "UPDATE torneos SET nombre_torneo=:nombre, 
        numero_equipos=:numero_equipos, zona=:zona WHERE id_torneo=:id_torneo";
        $query = $this->con->prepare($sql);
        $query->bindParam(":nombre", $nombre);
        $query->bindParam(":numero_equipos", $numero_equipos);
        $query->bindParam(":zona", $zona);
        $query->bindParam(":id_torneo", $id_torneo);
        $query->execute();

        }

        public function eliminarTorneo($id_torneo){
        
        $sql = "UPDATE torneos SET estado=0 WHERE id_torneo=:id_torneo";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_torneo", $id_torneo);
        $query->execute();


        }  
  


     }

     /*$ob = new torneos();
     $ob->eliminarTorneo(22);*/


 ?>