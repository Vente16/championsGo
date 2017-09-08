<?php 

  require_once "conexion.class.php";
 
    class usuarios{
  
	   public $con;

	   public function __construct(){
	  
	    $conexion = new conexion();
	    $this->con = $conexion->getConexion();

	   }

	   public function registrarUsuarios($email, $pass, $nombre, $rol){
       
        $sql = "INSERT INTO usuarios (email, pass, nombre, foto, rol) 
        VALUES (:email, :pass, :nombre, 'images/user.png', :rol)";
        $password = md5($pass);
        $query = $this->con->prepare($sql);
        $query->bindParam(":email", $email);
        $query->bindParam(":pass", $password);
        $query->bindParam(":nombre", $nombre);
        $query->bindParam(":rol", $rol);
        $query->execute();
    
	   }

	   public function login($email, $pass){

      $pass1 = md5($pass);
      $sql = "SELECT * FROM usuarios WHERE email=:email AND pass='$pass1'";
      $query = $this->con->prepare($sql);
      $query->bindParam(":email", $email);
      $query->execute();
      $int = 0;
      foreach ($query as $key) {
       	$int++;

      }  

       return $int;
     
	   }

    public function consultarUser($email){
    
    $sql = "SELECT * FROM usuarios WHERE email=:email";
    $query = $this->con->prepare($sql);
    $query->bindParam(":email", $email);
    $query->execute();
    $json;

    foreach ($query as $info) {
       $json = $info;
    }

     return $json;

 

    } 

	  
  
     }

   /* $usuario = new usuarios();
    echo json_encode($usuario->consultarUser("jj@gmail.com")); */
 ?>