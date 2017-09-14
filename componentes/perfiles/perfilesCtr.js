app.controller('perfilesCtr', perfilesCtr);

perfilesCtr.$inject = ['$scope', 'localStorageService', 'perfilesService'];

function perfilesCtr($scope, localStorageService, perfilesService){

  $scope.foto = localStorageService.get("user").foto;

  $scope.correo  = localStorageService.get("email");
  $scope.usuario = localStorageService.get("user");
  //localStorageService.set("user").foto = "test";
  
  $scope.guardar = function(){

    alertify.success('Foto de perfil actualizada');

    var data = {"foto": $scope.foto, "id": localStorageService.get("user").id};
      
   // console.log(data);

    perfilesService.cambiarFoto(data).then(function(impresion){
           
      console.log(impresion);
      var consulta = {"metodo": "consultarUser", "email": $scope.correo};

        perfilesService.consultarUser(consulta).then(function(res){
       
          console.log(res);
          $scope.foto = res.foto;
          var nuevos = {"nombre": res.nombre, "id": res.id_usuario, "foto": res.foto, "rol": res.rol};
         // console.log(datos);
          localStorageService.set("user", nuevos);

         });

     }); 
  
    

   }

  angular.element(document).ready(function() {

    var fotoInicial;

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
              $('#foto').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
        }

    }

    $("#btn_enviar").change(function() {

      readURL(this);
      $('#controles').fadeIn();
      fotoInicial = $('#foto').attr('src');

    });

    $('#cancelar').click(function() {

        // alert("No quier guardar");
        $('#foto').attr('src', fotoInicial);
        $('#controles').fadeOut();

    });

    $('#guardar').click(function() {

      $('#controles').fadeOut();

    });

   });
 


 }