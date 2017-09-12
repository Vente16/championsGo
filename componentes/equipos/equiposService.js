app.factory('equiposService', equiposService);

equiposService.$inject = ['$q', '$http'];

function equiposService($q, $http){
  
   
  return {
    
    consultarEquipoUser: consultarEquipoUser,
    registarEquipo: registarEquipo,
    consultarEquipo: consultarEquipo,
    actualizarEquipo: actualizarEquipo,
    eliminarEquipo: eliminarEquipo 
  }


 function consultarEquipoUser(datos){

   var def = $q.defer();
   var promesa = def.promise;

     $http({
      
       method: "POST",
       url: "api/controllers/equipos.controller.php",
       data: "data="+JSON.stringify(datos),
       headers: {'Content-Type': 'application/x-www-form-urlencoded'}

     }).then(function(res){

        def.resolve(res.data);
     }); 

      return promesa;

 }


 function registarEquipo(equipo){

   var def = $q.defer();
   var promesa = def.promise;
   equipo.metodo = "registrarEquipo";

    var fd = new FormData();
         fd.append('logo', equipo.logo);
         fd.append('nombre', equipo.nombre);
         fd.append('lugar', equipo.lugar);
         fd.append('jugadores', equipo.jugadores);
         fd.append('fecha', equipo.fechaT);
         fd.append('registrar', "registrar");
         fd.append('user', equipo.user);
         $http.post("api/controllers/equipos.controller.php", fd, {
             transformRequest: angular.identity,
             headers: {'Content-Type': undefined,'Process-Data': false}
         })
         .then(function(res){
             def.resolve(res.data);
         }); 


      return promesa;


 
   }


 function consultarEquipo(info){

   var def = $q.defer();
   var promesa = def.promise;

     $http({
      
       method: "POST",
       url: "api/controllers/equipos.controller.php",
       data: "data="+JSON.stringify(info),
       headers: {'Content-Type': 'application/x-www-form-urlencoded'}

     }).then(function(res){

        def.resolve(res.data);
     }); 

    return promesa;


 }  


 function actualizarEquipo(info){

   var def = $q.defer();
   var promesa = def.promise;

     $http({
      
       method: "POST",
       url: "api/controllers/equipos.controller.php",
       data: "data="+JSON.stringify(info),
       headers: {'Content-Type': 'application/x-www-form-urlencoded'}

     }).then(function(res){

        def.resolve(res.data);
     }); 

    return promesa;


 }  

 function eliminarEquipo(info){

   var def = $q.defer();
   var promesa = def.promise;

     $http({
      
       method: "POST",
       url: "api/controllers/equipos.controller.php",
       data: "data="+JSON.stringify(info),
       headers: {'Content-Type': 'application/x-www-form-urlencoded'}

     }).then(function(res){

        def.resolve(res.data);
     }); 

    return promesa;


 }  


 

}