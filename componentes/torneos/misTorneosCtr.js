// mi componente - controlador
app.controller("misTorneosCtr", misTorneosCtr);

misTorneosCtr.$inject = ['$scope', 'misTorneosService'];

function misTorneosCtr($scope, misTorneosService){


   misTorneosService.consultarMisTorneos().then(function(mistorneos){
         
         $scope.mistorneos = mistorneos;

   });


}
    



