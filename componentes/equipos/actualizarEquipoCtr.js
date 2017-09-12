app.controller('actualizarEquipoCtr', actualizarEquipoCtr);

actualizarEquipoCtr.$inject = ['$scope', 'equiposService', '$routeParams'];

function actualizarEquipoCtr($scope, equiposService, $routeParams){

  var Id = $routeParams.id;

  $scope.test = Id;

  var consulta = {"metodo": "consultarEquipo", "id": Id};

  equiposService.consultarEquipo(consulta).then(function(resp){
          
    $scope.equipo = resp;
    console.log(resp);

   });
 
   $scope.actualizarEquipo = function(){

   var nombre = angular.element($('#nombre')).val();
   var lugar  = angular.element($('#lugar')).val();
   var jugadores = angular.element($('#jugadores')).val();
   var datos=  {"metodo": "actualizarEquipo", "nombre": nombre, "lugar":lugar, "jugadores":jugadores, "id": Id};
   //console.log(datos);

    if (nombre.length > 0) {
        
      equiposService.actualizarEquipo(datos).then(function(data){

          alertify.alert('¡Correcto!', 'Equipo actualizado con éxito.', function(){ 
          alertify.success('Correcto'); 
          location.href = "http://localhost/championsGo/#/miEquipo";
        }); 

         //console.log(data);
 
      });

   }


   }


}