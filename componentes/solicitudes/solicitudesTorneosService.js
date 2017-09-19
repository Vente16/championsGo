app.factory("solicitudesTorneosService", solicitudesTorneosService);

solicitudesTorneosService.$inject = ['$http', '$q', 'localStorageService'];

function solicitudesTorneosService($http, $q, localStorageService){

  return {
    
    enviarSolicitud: enviarSolicitud

  }

  
  function enviarSolicitud(params){

    var defer = $q.defer();
    var promesa = defer.promise;
    params.metodo = "solicitarTorneos";
    $http({
 
     method: "POST",
     url: "api/controllers/solicitudes.controller.php",
     data: "data="+JSON.stringify(params),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}

       }).then(function(res){
            
           defer.resolve(res.data);

       });
      
    return promesa;

  }




}
