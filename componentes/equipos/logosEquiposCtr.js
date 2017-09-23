app.controller('logosEquiposCtr', logosEquiposCtr);

logosEquiposCtr.$inject = ['$scope', 'equiposService', 'localStorageService', '$location'];

function logosEquiposCtr($scope, equiposService, localStorageService, $location){


   

  $scope.guardar = function(id){

    //console.log(id);
    //console.log(imagen);
    var equipo = {"logo": $scope.logo, "id": id};
    console.log(equipo);
    equiposService.cambiarLogo(equipo).then(function(respuesta){

      if (respuesta == 1) {
          alertify.success('Has cambiado el logo correctamente');
      }
      else{
          alertify.error('Ha ocurrido un error');
      }

    });
    //console.log(infoT);
  
    

   }




  angular.element(document).ready(function() {

    var fotoInicial;

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
              $('.imagenEquipo').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
        }

    }

    $("#btn_enviar").change(function() {

      readURL(this);
      $('#controles').fadeIn();
      fotoInicial = $('.imagenEquipo').attr('src');

    });

    $('#cancelar').click(function() {

        // alert("No quier guardar");
        $('.imagenEquipo').attr('src', fotoInicial);
        $('#controles').fadeOut();

    });

    $('#guardar').click(function() {

      $('#controles').fadeOut();

    });

   });  
 


 }