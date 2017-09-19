<?php 
  
   require_once "../models/solicitudes.class.php";

   $solicitudes = new solicitudes();

   $datos = json_decode($_POST['data']);

   // print_r($datos);
   $metodo = $datos->metodo;

   switch ($metodo) {
   	case 'solicitarTorneos':
   		
   		$solicitudes->solicitarTorneos($datos->id_torneo, $datos->id_equipo, $datos->fecha, $datos->random);
   		break;
   	
   	default:
   		# code...
   		break;
   }









 ?>