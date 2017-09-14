<?php 
  
  require_once "../models/usuarios.class.php";

  $usuario = new usuarios();

  if (isset($_POST['cambiarFoto'])) {
     // Letra aleatoria.
   $letraAleatoria = chr(rand(ord("a"), ord("z")));
   // Número aleatorio
   $numeroAleatorio = rand(1, 1000);
   $combinacion = $letraAleatoria.$numeroAleatorio;
  // Ruta donde guardaré la imagen.
   $ruta    = "../../images/".$combinacion;
   $guardar = $ruta.basename($_FILES["foto"]["name"]);
   move_uploaded_file($_FILES["foto"]["tmp_name"], $guardar);
   $foto = "images/".$combinacion.basename($_FILES["foto"]["name"]);
   $usuario->actualizarFoto($foto, $_POST['id']);
   echo "Bien!";

  }
  else {

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
   

   }





 ?>