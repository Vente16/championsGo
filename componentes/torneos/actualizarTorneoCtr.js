app.controller('actualizarTorneoCtr', actualizarTorneoCtr);

actualizarTorneoCtr.$inject = ['$scope', 'misTorneosService', '$routeParams'];

function actualizarTorneoCtr($scope, misTorneosService, $routeParams){

  var Id = $routeParams.id;

  var consulta = {"metodo": "consultarTorneoId", "id": Id };

   misTorneosService.consultarTorneo(consulta).then(function(resp){
          
        //console.log(resp);
        $scope.torneo = resp;
       
   });
 
   $scope.actualizarTorneo = function(){

   var nombre = angular.element($('#nombre')).val();
   var zona = angular.element($('#zona')).val();
   var equipo = angular.element($('#equipo')).val();
   var datos=  {"metodo": "actualizarDatos", "nombre": nombre, "zona":zona, "equipo":equipo, "id": Id};

    if (nombre.length > 0) {

      misTorneosService.actualizarDatos(datos).then(function(data){

          alertify.alert('¡Correcto!', 'Torneo actualizado con éxito.', function(){ 
          alertify.success('Correcto'); 
          location.href = "http://localhost/championsGo/#/infoTorneo/"+Id;
        });
      
      });

     }
  
    }


}