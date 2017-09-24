// mi componente - servicio
app.factory("misTorneosService", misTorneosService);

misTorneosService.$inject = ['$http', '$q'];

function misTorneosService($http, $q){

    return {

     consultarMisTorneos: consultarMisTorneos,
     registrarTorneo: registrarTorneo,
     consultarTorneo: consultarTorneo,
     actualizarDatos: actualizarDatos,
     eliminarTorneo:  eliminarTorneo,
     consultarTorneos: consultarTorneos,
     cambiarLogo: cambiarLogo,
    

    }


  function consultarMisTorneos(user){

    var defer = $q.defer();
    var promesa = defer.promise;
    
    $http({
 
         method: "POST",
         url: "api/controllers/torneos.controller.php",
         data: "data="+JSON.stringify(user),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){

           defer.resolve(res.data);

       });
    

    return promesa;



   }

   function registrarTorneo (torneo){

     var fd = new FormData();
         fd.append('logo', torneo.logo);
         fd.append('nombre', torneo.nombre);
         fd.append('zona', torneo.zona);
         fd.append('equipos', torneo.equipos);
         fd.append('fecha', torneo.fechaT);
         fd.append('registrar', "registrar");
         fd.append('user', torneo.user);
         $http.post("api/controllers/torneos.controller.php", fd, {
             transformRequest: angular.identity,
             headers: {'Content-Type': undefined,'Process-Data': false}
         })
         .then(function(res){
             console.log(res.data);
         }); 

   }

  function consultarTorneo(info){

    var defer = $q.defer();
    var promesa = defer.promise;
    
    $http({
 
         method: "POST",
         url: "api/controllers/torneos.controller.php",
         data: "data="+JSON.stringify(info),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){

           defer.resolve(res.data);

       });
    

    return promesa;

  } 

   function actualizarDatos(datos){

    var defer = $q.defer();
    var promesa = defer.promise;
    
    $http({
 
         method: "POST",
         url: "api/controllers/torneos.controller.php",
         data: "data="+JSON.stringify(datos),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){

           defer.resolve(res.data);

       });
    

    return promesa;

  } 

    function eliminarTorneo(id){

    var defer = $q.defer();
    var promesa = defer.promise;
    
    $http({
 
         method: "POST",
         url: "api/controllers/torneos.controller.php",
         data: "data="+JSON.stringify(id),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){

           defer.resolve(res.data);

       });
    

    return promesa;

  } 


   function consultarTorneos(){

    var defer = $q.defer();
    var promesa = defer.promise;
    var info = {"metodo": "consultarTorneos"};
    $http({
 
         method: "POST",
         url: "api/controllers/torneos.controller.php",
         data: "data="+JSON.stringify(info),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){

           defer.resolve(res.data);

       });
    

    return promesa;



   }

   function cambiarLogo(infotorneo){
     
    var defer = $q.defer();
    var promesa = defer.promise;

    var fd = new FormData();
     fd.append('logo', infotorneo.logo);
     fd.append('id', infotorneo.id);
     fd.append('cambiarLogo', "cambiarlogo")
     $http.post("api/controllers/torneos.controller.php", fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined,'Process-Data': false}
     })
     .then(function(res){
         defer.resolve(res.data);
     });

      return promesa;

   }


  






}