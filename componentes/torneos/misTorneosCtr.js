// mi componente - controlador
app.controller("misTorneosCtr", misTorneosCtr);

misTorneosCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService'];

function misTorneosCtr($scope, misTorneosService, localStorageService){
      
       
    function consultar(){

       var ident = localStorageService.get("user");
       var user = {"metodo": "consultarTorneosUser", "id": ident.id};

       misTorneosService.consultarMisTorneos(user).then(function(torneos){
         
        console.log(torneos);
        $scope.tam = torneos.length;
        $scope.mistorneos = torneos;

      }); 


     }

   consultar();

  
    $scope.eliminarTorneo = function(id){

  	   //alert(id);
  	  var datos = {"metodo": "eliminarTorneo", "id": id};

  	    alertify.confirm('Confirmar acción', '¿Está seguro de elimnar este torneo?', function(){ 
  	     
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
    



