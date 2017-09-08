<?php 
  
  require_once "../models/usuarios.class.php";

  $usuario = new usuarios();
  $datos = json_decode($_POST['data']);
  switch ($datos->metodo) {

  	case 'login':
  		echo $usuario->login($datos->email, $datos->pass);
  		break;

    case 'consultarUser':
      echo json_encode($usuario->consultarUser($datos->email));
      break;
      
  	default:
  		echo "Ningún método ha sido llamado...";
  		break;
  }
 







 ?>