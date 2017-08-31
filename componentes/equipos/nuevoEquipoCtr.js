app.controller('nuevoEquipoCtr', nuevoEquipoCtr);

nuevoEquipoCtr.$inject = ['$scope'];

function nuevoEquipoCtr($scope){
  
   //$scope.validarNombre = /[(a-zA-Z0-9)]$/;

  $scope.registrarEquipo = function (){

    $scope.equipo.logo = $scope.file;

    if ($scope.file != undefined) {     
        $scope.formulario.$valid = true;
    }
  
    if ($scope.formulario.$valid) {     
        console.log($scope.equipo);
    }

     console.log($scope.formulario.$valid);
     
  }
 

}