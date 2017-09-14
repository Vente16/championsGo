app.factory('perfilesService', perfilesService);

perfilesService.$inject = ['$q', '$http'];

function perfilesService($q, $http){
  
   
  return {
    
    consultarUser: consultarUser,
    cambiarFoto: cambiarFoto
    
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


  function cambiarFoto(datos){

    var def = $q.defer();
    var promesa = def.promise;
    var fd = new FormData();
    fd.append('foto', datos.foto);
    fd.append('id', datos.id);
    fd.append('cambiarFoto', "cambiarFoto");
    $http.post("api/controllers/usuarios.controller.php", fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined,'Process-Data': false}

    }).then(function(res){
       def.resolve(res.data);
    }); 

    return promesa;

   } 

 

}