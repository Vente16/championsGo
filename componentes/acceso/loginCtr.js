app.controller("loginCtr", loginCtr);

loginCtr.$inject = ['$scope', '$location','loginService', 'localStorageService'];

function loginCtr($scope, $location, loginService, localStorageService){

  loginService.validarSesion();

  $scope.invalido = false;

  $scope.login = function(){

    $scope.usuario.metodo = "login";

    loginService.login($scope.usuario).then(function(res){

      if (res == 0) {
        $scope.invalido = true;
      }
      else{
        localStorageService.set("email", $scope.usuario.email);
        $location.path("/inicio");
      }

     });
 
   }

}

