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
        console.log($scope.torneo.logo.name);
    }

     console.log($scope.formulario.$valid);
     
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