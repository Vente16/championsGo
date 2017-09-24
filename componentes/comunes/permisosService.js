// mi componente - servicio
app.factory("permisosService", permisosService);

permisosService.$inject = ['$http', '$q', '$location','localStorageService'];

function permisosService($http, $q, $location, localStorageService){

  return {
    
  torneos: torneos,
  equipos: equipos
    
  }


  function torneos(){

   var rol = localStorageService.get("user").rol;
  //console.log("de permisos: "+rol);
    if (rol != "adminTorneo") {
       $location.path("/error");

    }

  }

  function equipos(){
  
  var rol = localStorageService.get("user").rol;
  //console.log("de permisos: "+rol);
    if (rol != "tecnico") {
       $location.path("/error");
       
    }

  }


 



}