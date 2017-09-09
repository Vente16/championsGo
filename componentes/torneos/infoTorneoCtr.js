app.controller('infoTorneoCtr', infoTorneoCtr);

infoTorneoCtr.$inject = ['$scope', 'misTorneosService', '$routeParams' ];

function infoTorneoCtr($scope, misTorneosService, $routeParams){

   
   var consulta = {"metodo": "consultarTorneoId", "id": $routeParams.id};

   misTorneosService.consultarTorneo(consulta).then(function(resp){
          
        //console.log(resp);
        $scope.torneo = resp;
        
   });

 

}