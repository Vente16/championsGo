// mi componente - controlador
app.controller("misTorneosCtr", misTorneosCtr);

misTorneosCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService', 
'permisosService', 'loginService'];

function misTorneosCtr($scope, misTorneosService, localStorageService, permisosService, loginService){
      
    // Validando sí existe la sesión.  
    loginService.sesionVacia();
    
    // Validamos que el rol se adminTorneo
    permisosService.torneos();

    // Función para consultar los torneos de un usuario.   
    function consultar(){

       var ident = localStorageService.get("user");
       var user = {"metodo": "consultarTorneosUser", "id": ident.id};

       misTorneosService.consultarMisTorneos(user).then(function(torneos){
         
        console.log(torneos);
        $scope.tam = torneos.length;
        $scope.mistorneos = torneos;

      });

     }
  
    // Se ejecuta la función cuando exista la sesión 
   if (localStorageService.get("user") != null) {

     consultar(); 

   }

    // Eliminar un torneo de un usuario.
    $scope.eliminarTorneo = function(id){

  	   //alert(id);
  	  var datos = {"metodo": "eliminarTorneo", "id": id};
             
  	  alertify.confirm('Confirmar acción', '<h4>¿Está seguro(a) de elimnar este torneo?</h4>', function(){ 
  	     
  	        misTorneosService.eliminarTorneo(datos).then(function(respuesta){
               
             console.log(respuesta);
             consultar();
             alertify.success('Torneo elminado correctamente')
              
  	        });

  	  },
  	 	function(){ 
  	 
  	  });


     } 

     


}
    



