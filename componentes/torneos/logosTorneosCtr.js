app.controller('logosTorneosCtr', logosTorneosCtr);

logosTorneosCtr.$inject = ['$scope', 'misTorneosService', 'localStorageService', '$location'];

function logosTorneosCtr($scope, misTorneosService, localStorageService, $location){


   

    
  $scope.guardar = function(id){

    var imagen = "img"+id;
    //console.log(imagen);
    
    var infoT = {"logo": $scope.logo, "id": id};
      alertify.success('Has cambiado el logo correctamente');
    //console.log(infoT);
  
    misTorneosService.cambiarLogo(infoT).then(function(cambio){

     console.log(cambio);

     $scope.torneo.logo = cambio;
     
  
    }); 


   }








  angular.element(document).ready(function() {

    var fotoInicial;

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
              $('.imagenTorneo').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
        }

    }

    $("#btn_enviar").change(function() {

      readURL(this);
      $('#controles').fadeIn();
      fotoInicial = $('.imagenTorneo').attr('src');

    });

    $('#cancelar').click(function() {

        // alert("No quier guardar");
        $('.imagenTorneo').attr('src', fotoInicial);
        $('#controles').fadeOut();

    });

    $('#guardar').click(function() {

      $('#controles').fadeOut();

    });

   });  
 


 }