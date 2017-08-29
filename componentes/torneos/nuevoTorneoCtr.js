app.controller('nuevoTorneoCtr', nuevoTorneoCtr);

nuevoTorneoCtr.$inject = ['$scope'];

function nuevoTorneoCtr($scope){
  
   //$scope.validarNombre = /[(a-zA-Z0-9)]$/;

  $scope.registrarTorneo = function (){

    $scope.torneo.logo = $scope.file;

    if ($scope.file != undefined) {     
        $scope.formulario.$valid = true;
    }
  
    if ($scope.formulario.$valid) {     
        console.log($scope.torneo);
    }

     console.log($scope.formulario.$valid);
     
  }
 

}