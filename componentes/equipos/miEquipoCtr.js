app.controller("miEquipoCtr", miEquipoCtr);

miEquipoCtr.$inject = ['$scope', 'equiposService', 'localStorageService', '$location'];

function miEquipoCtr($scope, equiposService, localStorageService, $location){

   var info = localStorageService.get("user");
   var id = info.id;

   var datos = {"metodo": "consultarEquipoUser", "id": id};

   consulta();

   function consulta(){

    equiposService.consultarEquipoUser(datos).then(function(result){

   	    $scope.tam = result.length;
   	   // console.log($scope.tam);  
        $scope.equipoInfo = result;
        console.log($scope.equipoInfo);

     });

 
   }





  $scope.eliminarEquipo = function(id_equipo){

   var enviar = {"metodo": "eliminarEquipo", "id": id_equipo};
   
   var alerta = "<br/><p class='alert alert-warning'>Tenga en cuenta que una vez eliminado el equipo no podrá volverlo a ver.</p>";


   alertify.confirm('Confirmar acción', '<h5>¿Está seguro de eliminar a este equipo?</h5>'+alerta,
     function(){ 
          
     equiposService.eliminarEquipo(enviar).then(function(resp){
         
       consulta();  
       alertify.success('¡Equipo eliminado correctamente!'); 
       console.log(resp);
         
     }) 
    
      
    },
      function(){ 
      	
      });


  }





   
}
    

