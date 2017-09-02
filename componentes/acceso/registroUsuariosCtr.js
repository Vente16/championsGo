
app.controller('registroUsuariosCtr', registroUsuariosCtr);

registroUsuariosCtr.$inject = ['$scope'];

function registroUsuariosCtr($scope){

 $scope.validarCorreo = /^[_a-zA-Z-0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


 $scope.registrarUsuario = function(){

 	 alert("Hola");
 }



}