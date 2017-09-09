// control de rutas
app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider) {

  $routeProvider
    .when("/",{
    	templateUrl: "componentes/acceso/acceso.tmpl.html", 
    	controller: "loginCtr"
    })
    .when("/inicio",{
      templateUrl: "templates/home.html", 
      controller: "inicioCtr"
    })
     .when("/registro",{
      templateUrl: "componentes/acceso/registroUsuarios.html", 
      controller: "registroUsuariosCtr"
    })
    .when("/misTorneos",{
    	templateUrl: 'componentes/torneos/mistorneos.html',
      controller: 'misTorneosCtr' 
    })
    .when("/nuevoTorneo",{
    	controller: 'nuevoTorneoCtr', 
    	templateUrl: 'componentes/torneos/nuevoTorneo.html'
    })
    .when("/solicitudesTorneos", {
    	templateUrl: "componentes/torneos/solicitudes.html", 
       //	controller: "controladorPrincipal"
    })
    .when("/infoTorneo/:id", {
        templateUrl: "componentes/torneos/infotorneo.html", 
        controller: "infoTorneoCtr"
    })
      .when("/actualizarTorneo/:id", {
        templateUrl: "componentes/torneos/actualizarTorneo.html", 
        controller: "actualizarTorneoCtr"
    })
    .when("/cambiarlogo", {
        templateUrl: "componentes/torneos/cambiarlogo.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/buscarTorneo", {
        templateUrl: "componentes/torneos/buscarTorneo.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/miEquipo", {
        templateUrl: "componentes/equipos/miEquipo.html", 
        controller: "miEquipoCtr"
    })
    .when("/solicitudesEquipo", {
        templateUrl: "componentes/equipos/solicitudes.html", 
       //   controller: "controladorPrincipal"
    })
    .when("/buscarEquipos", {
        templateUrl: "componentes/equipos/buscarEquipos.html", 
       //   controller: "controladorPrincipal"
    })
     .when("/nuevoEquipo", {
        templateUrl: "componentes/equipos/nuevoEquipo.html", 
        controller: "nuevoEquipoCtr"
    })
      .when("/miPerfil", {
        templateUrl: "componentes/perfiles/miPerfil.html", 
       // controller: "nuevoEquipoCtr"
    })
      .when("/cambiarFoto", {
        templateUrl: "componentes/perfiles/cambiarFoto.html", 
       // controller: "nuevoEquipoCtr"
    })
    .when("/404", {
        templateUrl: "componentes/comunes/404.tmpl.html", 
        controller: "controladorPrincipal"
    })
    .otherwise({redirectTo: '/404'});
   /* login*/
}]);