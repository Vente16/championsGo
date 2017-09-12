app.controller('nuevoEquipoCtr', nuevoEquipoCtr);

nuevoEquipoCtr.$inject = ['$scope', 'equiposService', 'localStorageService'];

function nuevoEquipoCtr($scope, equiposService, localStorageService){
  
     $scope.fecha = new Date();

  $scope.registrarEquipo = function (){

    $scope.equipo.logo = $scope.file;
  
    if ($scope.file != undefined) {     
      $scope.formulario.$valid = true;
    }
  
    if ($scope.formulario.$valid) {     
        
        var user = localStorageService.get("user");
        $scope.equipo.user = user.id;
        var f = angular.element($('#Fecha')).text();
        $scope.equipo.fechaT = f;
        console.log($scope.equipo);

        equiposService.registarEquipo($scope.equipo).then(function(res){

          alertify.alert('¡Correcto!', '<h4 class="alert alert-success">Equipo registrado con éxito.</h4>', function(){ 
          alertify.success('Correcto'); 
          location.href = "http://localhost/championsGo/#/miEquipo";

        }); 
 
          

        });
        //console.log($scope.torneo);

       /* misTorneosService.registrarTorneo($scope.torneo);
        alertify.alert('¡Correcto!', 'Torneo guardado con éxito.', function(){ 
          alertify.success('Correcto'); 
          location.href = "http://localhost/championsGo/#/misTorneos"; 
        }); */

       

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