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
    .when("/solicitudesTorneos", {
    	templateUrl: "componentes/torneos/solicitudes.html", 
       //	controller: "controladorPrincipal"
    })
    .when("/infoTorneo", {
        templateUrl: "componentes/torneos/infotorneo.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/cambiarlogo", {
        templateUrl: "componentes/torneos/cambiarlogo.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/buscarTorneo", {
        templateUrl: "componentes/torneos/buscarTorneo.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/404", {
        templateUrl: "componentes/comunes/404.tmpl.html", 
        controller: "controladorPrincipal"
    })
    .otherwise({redirectTo: '/404'});
   /* login*/
}]);