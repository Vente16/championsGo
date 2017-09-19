<?php 
  
  require_once "conexion.class.php";

    class solicitudes{
  
	    public $con;

		public function __construct(){
				  
		   $conexion = new conexion();
		   $this->con = $conexion->getConexion();

		}

		public function solicitarTorneos($id_torneo, $id_equipo, $fecha, $random){

        $sql = "INSERT INTO solicitudes_torneos (id_torneo, id_equipo, estado_solicitud, fecha_solicitud, random, estado)
        VALUES (:id_torneo, :id_equipo, 'Pendiente', :fecha, :random,  1)";
        $query = $this->con->prepare($sql);
        $query->bindParam(":id_torneo", $id_torneo);
        $query->bindParam(":id_equipo", $id_equipo);
        $query->bindParam(":fecha", $fecha);
        $query->bindParam(":random", $random);
        $query->execute();


		}

		public function cancelarSoliTorneos($random){
         
        $sql = "UPDATE solicitudes_torneos SET  estado_solicitud='Cancelada' WHERE random=:random";
        $query = $this->con->prepare($sql);
        $query->bindParam(":random", $random);
        $query->execute();


		}



     }



   /* $ob = new solicitudes();

    $ob->cancelarSoliTorneos(39528); */










 ?>