<?php 

   require_once "../models/torneos.class.php";
   $torneos = new torneos();

   if (isset($_POST["registrar"])) {
     
   // Ruta donde guardaré la imagen.
   $ruta    = "../../images/";
   $guardar = $ruta.basename($_FILES["logo"]["name"]);
   move_uploaded_file($_FILES["logo"]["tmp_name"], $guardar);
   $logo = "images/".basename($_FILES["logo"]["name"]);
   $torneos->registrarTorneo($_POST['nombre'], 
   	$_POST['equipos'],  $_POST['fecha'], 
   	$_POST['zona'], 
   	$logo, 
   	$_POST['user']);
    echo "Mire la DB";
     
   } else {
    
     $datos = json_decode($_POST['data']);
     $metodo = $datos->metodo;
     switch ($metodo) {

      	case 'consultarTorneosUser':
       		echo json_encode($torneos->consultarTorneosUser($datos->id));
       		break;

        case 'consultarTorneoId':
          echo json_encode($torneos->consultarTorneoId($datos->id));
          break;

        case 'actualizarDatos':
          $torneos->actualizarDatos($datos->nombre, $datos->equipo, $datos->zona, $datos->id);
          echo "Sí actualizó.";
          break;
   
         case 'eliminarTorneo':
           $torneos->eliminarTorneo($datos->id);
          break;
       	

       	default:
       		# code...
       		break;
         
      }

   }



 ?>