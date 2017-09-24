app.factory("loginService", loginService);

loginService.$inject = ['$http', '$q', '$location','localStorageService'];

function loginService($http, $q, $location, localStorageService){

   return {
    login: login,
    consultarUser: consultarUser,
    validarSesion: validarSesion,
    registrarUsuario: registrarUsuario,
    sesionVacia, sesionVacia

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

    function registrarUsuario(usuario){
    
    var defer = $q.defer();
    var promesa = defer.promise;
    
    usuario.metodo = "registrarUsuario";
      
     $http({
 
         method: "POST",
         url: "api/controllers/usuarios.controller.php",
         data: "data="+JSON.stringify(usuario),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){
            
        defer.resolve(res.data);

    });
      
    return promesa;
    
   }





   function validarSesion(){
   
    var user = localStorageService.get("email");
    var info = localStorageService.get("user");

    if (user == null || info == null) {
      
      $location.path("/");
      localStorageService.remove();

    }
    else{
        $location.path("/inicio");
    }
    
   }

   function sesionVacia(){
    var user = localStorageService.get("email");
    var info = localStorageService.get("user");

    if (user == null || info == null) {
      $location.path("/");
      localStorageService.remove();

    }


   }



}
