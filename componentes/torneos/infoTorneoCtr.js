app.controller('infoTorneoCtr', infoTorneoCtr);

infoTorneoCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService' ,'$routeParams' ];

function infoTorneoCtr($scope, misTorneosService, localStorageService, $routeParams){

   var id = localStorageService.get("user");
   $scope.user = id.id;
   console.log($scope.user);
   var consulta = {"metodo": "consultarTorneoId", "id": $routeParams.id};

   misTorneosService.consultarTorneo(consulta).then(function(resp){
          
        //console.log(resp);
        $scope.torneo = resp;

        $scope.compare = resp[0].id_usuario;

        console.log($scope.compare);
        
   });

 

}