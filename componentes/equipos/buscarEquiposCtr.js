app.controller("buscarEquiposCtr", buscarEquiposCtr);

buscarEquiposCtr.$inject = ['$scope', 'equiposService', 'localStorageService', '$location'];

function buscarEquiposCtr($scope, equiposService, localStorageService, $location){

     $scope.rol = localStorageService.get("user").rol;
   
    equiposService.consultarEquipos().then(function(equipos){
        
      $scope.equipos = equipos;

    });


    


   
  angular.element(document).ready(function(){
        
    var data = {"metodo": "autocompletarEquipos"};
    
    $.get( "api/controllers/autocompletar.controller.php", data, function(respuesta){
          
      var arregloEquipos = JSON.parse(respuesta);

     // console.log(arregloEquipos);

      $( "#buscarEquipos" ).autocomplete({
          source: arregloEquipos
       });
      
     });

   });


   
}
    

