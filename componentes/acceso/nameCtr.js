app.controller("nameCtr", nameCtr);

nameCtr.$inject = ['$scope', 'loginService', 'localStorageService', '$location'];

function nameCtr($scope, loginService, localStorageService, $location){
  
   var obtenerN = localStorageService.get("user");

   if (obtenerN == null) {
    
	  var info = {"metodo": "consultarUser", "email": localStorageService.get("email")};

	  loginService.consultarUser(info).then(function(res){

	    $scope.nombre = res.nombre;

	  });

    }else {

     $scope.nombre = obtenerN.nombre; 

    } 
   

   $scope.logout = function(){

   	 window.localStorage.clear();
   	 $location.path("/");

   }

  
    	
 
 }

