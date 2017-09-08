app.controller("inicioCtr", inicioCtr);

inicioCtr.$inject = ['$scope', 'loginService', 'localStorageService'];

function inicioCtr($scope, loginService, localStorageService){

  loginService.validarSesion();

  if(localStorageService.get("email") == null){
    
    loginService.validarSesion();
  }
  else {

   var info = {"metodo": "consultarUser", "email": localStorageService.get("email")};
   
      loginService.consultarUser(info).then(function(res){
           
        var datos = {"nombre": res.nombre, "id": res.id_usuario, "foto": res.foto, "rol": res.rol};
       // console.log(datos);
        localStorageService.set("user", datos);
        
      });

   } 

 
   
   
}

