app.controller('nuevoTorneoCtr', nuevoTorneoCtr);

nuevoTorneoCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService'];

function nuevoTorneoCtr($scope, misTorneosService, localStorageService){

   //$scope.validarNombre = /[(a-zA-Z0-9)]$/;

   $scope.fecha = new Date();

  $scope.registrarTorneo = function (){

    $scope.torneo.logo = $scope.file;
  

    if ($scope.file != undefined) {     
        $scope.formulario.$valid = true;
    }
  
    if ($scope.formulario.$valid) {     
        
        var user = localStorageService.get("user");
        $scope.torneo.user = user.id;
        var f = angular.element($('#Fecha')).text();
        $scope.torneo.fechaT = f;
        //console.log($scope.torneo);

        misTorneosService.registrarTorneo($scope.torneo);

    }

    // console.log($scope.formulario.$valid);
     
  }


  angular.element(document).ready(function () {
          
           function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
         $('#blah').removeClass(); 
        readURL(this);
    });  


  });


 

}