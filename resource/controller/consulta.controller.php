<?php 
 
    require_once "../model/consultas.class.php";

    $Cons = new Consulta();
    $Retornar = $Cons->consultarPais();
    $datos = array(); 
    foreach ($Retornar as $info) {
  	  
  	  $datos[] = $info;
   }

   
     echo json_encode($datos);

  /*     foreach ($infor as $paises) {

     	 echo "<h1>".$infor['Id_pais']."</h1>";
     }  */










 ?>