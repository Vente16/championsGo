<?php 

  require_once "conexion.class.php";
 
    class equipos{
  
		public $con;

		public function __construct(){
			  
		   $conexion = new conexion();
		   $this->con = $conexion->getConexion();

	    }


	    public function consultarEquipos(){
        
         $sql = "SELECT * FROM equipos WHERE disponible=1 AND estado=1";
         $query = $this->con->prepare($sql);
         $query->execute();
         $json = array();

         foreach ($query as $equipo) {
         	$json[] = $equipo;
         }

         return $json;

	    }

	    public function consultarEquipoUser($id_user){
        
        $sql = "SELECT * FROM equipos WHERE id_usuario=:id_user AND estado=1";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_user", $id_user);
        $query->execute();
        $json = array();

         foreach ($query as $equipo) {
         	$json[] = $equipo;
         }

         return $json;

	    }


	    public function registrarEquipo($nombre, $jugadores, $fecha, $lugar, $logo, $id_user){
		    $sql = "INSERT INTO equipos(nombre_equipo, numero_jugadores, fecha_creacion, lugar, logo_equipo, 
		    id_usuario, disponible, estado)
		     VALUES (:nombre, :jugadores, :fecha, :lugar, :logo, :id_user,  1, 1);";
		    $query = $this->con->prepare($sql);
		    $query->bindParam(":nombre", $nombre);
		    $query->bindParam(":jugadores", $jugadores);		
	        $query->bindParam(":fecha", $fecha);
	        $query->bindParam(":lugar", $lugar);
	        $query->bindParam(":logo", $logo);
	        $query->bindParam(":id_user", $id_user);
	        $query->execute();	

	    } 

        
        public function actulizarEquipo($nombre, $jugadores, $lugar, $id_equipo){
        
           $sql = "UPDATE equipos SET nombre_equipo=:nombre, numero_jugadores=:jugadores,  
            lugar=:lugar WHERE id_equipo=:id_equipo";
            $query = $this->con->prepare($sql);
		    $query->bindParam(":nombre", $nombre);
		    $query->bindParam(":jugadores", $jugadores);		
	        $query->bindParam(":lugar", $lugar);
	        $query->bindParam(":id_equipo", $id_equipo);
	        $query->execute();	


        }

        public function eliminarEquipo($id_equipo){
         
         $sql = "UPDATE equipos SET estado=0 WHERE id_equipo=:id_equipo";
         $query  = $this->con->prepare($sql);
         $query->bindParam(":id_equipo", $id_equipo);
         $query->execute();

        }

        public function consultarEquipo($id_equipo){
        
        $sql = "SELECT * FROM equipos WHERE id_equipo=:id_equipo";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_equipo", $id_equipo);
        $query->execute();
        $json = array();

         foreach ($query as $equipo) {
         	$json[] = $equipo;
         }

         return $json;


        }




     }


      /*$ob = new equipos();
      $ob->actulizarEquipo("Prado FC", 16, "Medellín", 7);*/




 ?>