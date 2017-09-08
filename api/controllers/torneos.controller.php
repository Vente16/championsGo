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
     
   }



 ?>