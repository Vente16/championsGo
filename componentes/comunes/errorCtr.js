app.controller("errorCtr", errorCtr);

errorCtr.$inject = ['$scope', '$location', 'loginService'];

function errorCtr($scope, $location, loginService){

 loginService.sesionVacia();

}

