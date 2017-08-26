// control de rutas
app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider) {

  $routeProvider
    /*.when("/",{
      templateUrl: "componentes/acceso/acceso.tmpl.html", 
      controller: "controladorPrincipal"}) */
    .when("/login",{
    	templateUrl: "componentes/acceso/acceso.tmpl.html", 
    	controller: "controladorPrincipal"
    })
    .when("/",{
    	controller: 'misTorneosCtr', 
    	templateUrl: 'componentes/torneos/mistorneos.html'
    })
    .when("/nuevoTorneo",{
    	controller: 'nuevoTorneoCtr', 
    	templateUrl: 'componentes/torneos/nuevoTorneo.html'
    })
    .when("/404", {
    	templateUrl: "componentes/comunes/404.tmpl.html", 
    	controller: "controladorPrincipal"
    })
    .otherwise({redirectTo: '/404'});
   /* login*/
}]);