// mi componente - controlador
app.controller("buscarTorneosCtr", buscarTorneosCtr);

buscarTorneosCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService', 'equiposService', 
'solicitudesTorneosService'];

function buscarTorneosCtr($scope, misTorneosService, localStorageService, equiposService, solicitudesTorneosService){
      
    var info = localStorageService.get("user");
   
    $scope.rol = info.rol;
      
    console.log($scope.rol);
  
    misTorneosService.consultarTorneos().then(function(res){

       console.log(res);
        
       $scope.informacion = res;
                   
    });


   var random;

   $scope.solicitarTorneo = function(id){

    var datos = {"metodo": "consultarEquipoUser", "id": info.id};
    angular.element($('.'+id)).css("display", "none");
    angular.element($('.s'+id)).css("display", "");

    equiposService.consultarEquipoUser(datos).then(function(equipoI){
             
      console.log(equipoI);

      var f = new Date();
      var mes = f.getMonth()+1;
      var fecha = f.getDate() + "/0" + mes + "/" + f.getFullYear();
      random = Math.round(Math.random()*100000);
      var id_torneo = id;
      var id_equipo = equipoI[0].id_equipo;


      var soli = {"id_torneo": id_torneo, "id_equipo": id_equipo, "fecha": fecha, "random": random};

      console.log(soli);


       solicitudesTorneosService.enviarSolicitud(soli).then(function(registro){
             
         console.log(registro);    

       });
       
    });


   }




   $scope.cancelar = function(para){

    angular.element($('.'+para)).css("display", "");
    angular.element($('.s'+para)).css("display", "none");
    console.log(random);

   }

















  angular.element(document).ready(function(){
        
    var data = {"metodo": "autocompletarTorneos"};
    
    $.get( "api/controllers/autocompletar.controller.php", data, function(respuesta){
          
      var torneos = JSON.parse(respuesta);

      $( "#tags" ).autocomplete({
          source: torneos
       });
      
     });

   });







}
    



