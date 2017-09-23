
app.controller('registroUsuariosCtr', registroUsuariosCtr);

registroUsuariosCtr.$inject = ['$scope', 'loginService', '$location'];

function registroUsuariosCtr($scope, loginService, $location){



	/*$scope.usuario = {};
	$scope.usuario.email = "";
	$scope.usuario.pass = "";
	$scope.usuario.nombre = "";*/



  $scope.registrar = function(){

  	//console.log($scope.usuario);

    loginService.registrarUsuario($scope.usuario).then(function(datos){

      console.log(datos);

      alertify.success("Usuario registrado correctamente, ya puedes acceder a la aplicación");
      $location.path("/");

    });

  }

}