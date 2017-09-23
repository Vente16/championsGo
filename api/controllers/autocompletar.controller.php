<?php 

   require_once "../models/autocompletar.class.php";
   $autocompletar = new autocompletar();
   
   if (isset($_GET['metodo'])) {
   	    
   	$metodo = $_GET['metodo'];
   
    switch ($metodo) {

    	case 'autocompletarTorneos':
    		echo json_encode($autocompletar->autocompletarTorneos());
    		break;

      case 'autocompletarEquipos':
        echo json_encode($autocompletar->autocompletarEquipos());
        break;  
    	
    	default:
    		echo "Ningún método llamado..";
    		break;

    }



   }







 ?>