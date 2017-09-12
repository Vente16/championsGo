app.controller('perfilesCtr', perfilesCtr);

perfilesCtr.$inject = ['$scope', 'localStorageService'];

function perfilesCtr($scope, localStorageService){
  
  $scope.formulario = false;

  localStorageService.set("user", );
  
  //console.log(local);

}