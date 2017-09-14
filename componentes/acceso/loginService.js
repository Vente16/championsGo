app.factory("loginService", loginService);

loginService.$inject = ['$http', '$q', '$location','localStorageService'];

function loginService($http, $q, $location, localStorageService){

   return {
    login: login,
    consultarUser: consultarUser,
    validarSesion: validarSesion

   }

   function login(user){

    var defer = $q.defer();
    var promesa = defer.promise;
      
       $http({
 
         method: "POST",
         url: "api/controllers/usuarios.controller.php",
         data: "data="+JSON.stringify(user),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){
            
           defer.resolve(res.data);

       });
      
    return promesa;

   }


   function consultarUser(info){
    
    var defer = $q.defer();
    var promesa = defer.promise;
      
     $http({
 
         method: "POST",
         url: "api/controllers/usuarios.controller.php",
         data: "data="+JSON.stringify(info),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){
            
        defer.resolve(res.data);

    });
      
    return promesa;
    
   }

   function validarSesion(){
   
    var user = localStorageService.get("email");

    if (user == null) {
      
      $location.path("/");

    }else {

      $location.path("/inicio");  
    }
    
  

   } 





}
