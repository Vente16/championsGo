angular.module("FinalApp",["lumx","ngRoute"])
.controller('peticiones', function($scope, $http){
  
       $http({
        
          method: 'GET',
          url: 'controller/consulta.controller.php'

       }).then( function(response){

           $scope.respuesta = response;
           console.log($scope.respuesta);

       });   
 

});

