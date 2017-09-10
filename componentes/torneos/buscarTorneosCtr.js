// mi componente - controlador
app.controller("buscarTorneosCtr", buscarTorneosCtr);

buscarTorneosCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService'];

function buscarTorneosCtr($scope, misTorneosService, localStorageService){
      
      var info = localStorageService.get("user");
   
      $scope.rol = info.rol;
      
      console.log($scope.rol);
  
      misTorneosService.consultarTorneos().then(function(res){

          console.log(res);
        
          $scope.informacion = res;
                   
      });


  angular.element(document).ready(function(){
        
    var data = {"metodo": "autocompletarTorneos"};
    
    $.get( "api/controllers/autocompletar.controller.php", data, function(respuesta){
          
      var torneos = JSON.parse(respuesta);

      $( "#tags" ).autocomplete({
          source: torneos
       });
      
     });

   });



}
    



