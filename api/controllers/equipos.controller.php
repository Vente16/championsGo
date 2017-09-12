<?php 

 require_once "../models/equipos.class.php";
 $equipos = new equipos();


  if (isset($_POST['registrar'])) {
  	
   // Ruta donde guardaré la imagen.
   $ruta    = "../../images/";
   $guardar = $ruta.basename($_FILES["logo"]["name"]);
   move_uploaded_file($_FILES["logo"]["tmp_name"], $guardar);
   $logo = "images/".basename($_FILES["logo"]["name"]);
   $equipos->registrarEquipo($_POST['nombre'],
   $_POST['jugadores'], $_POST['fecha'], $_POST['lugar'], $logo, $_POST['user']);

  } else {

  $data = json_decode($_POST['data']);
  $metodo = $data->metodo;

  switch ($metodo) {

  	case 'consultarEquipoUser':
  		echo json_encode($equipos->consultarEquipoUser($data->id));
  		break;

	case 'consultarEquipo':
	    echo json_encode($equipos->consultarEquipo($data->id));
	  	break;

	case 'actualizarEquipo':
	    $equipos->actulizarEquipo($data->nombre, $data->jugadores, $data->lugar, $data->id);
	   // print_r($data);
	  	break;

	case 'eliminarEquipo':
	    $equipos->eliminarEquipo($data->id);
	  	break;  	

  	default:
  		echo "Ningún método llamado.";
  	   break;
   
   }
   

  }
  //echo "Controlador para equipos...";
  




 ?>