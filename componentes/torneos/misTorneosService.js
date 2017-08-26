// mi componente - servicio
app.factory("misTorneosService", misTorneosService);

misTorneosService.$inject = ['$http', '$q'];

function misTorneosService($http, $q){

    return {

        consultarMisTorneos: consultarMisTorneos

    }


  function consultarMisTorneos(){

    var defer = $q.defer();
    var promesa = defer.promise;

    var misTorneos = [
    
    {
        logo: "images/mundial.jpg",
        nombreTorneo: "Mundial 2018",
        cantidadEquipos: "10"
    },
    {
        logo: "images/euro.jpg",
        nombreTorneo: "Eurocopa",
        cantidadEquipos: "12"
    },
    {
        logo: "images/copaamerica.jpg",
        nombreTorneo: "Copa ámerica 2016",
        cantidadEquipos: "14"
    },
    {
        logo: "images/champions.png",
        nombreTorneo: "Champions league",
        cantidadEquipos: "16"
    },
    {
        logo: "images/europaleague.jpg",
        nombreTorneo: "Europa league",
        cantidadEquipos: "18"
    },
    {
        logo: "images/españa.png",
        nombreTorneo: "La liga",
        cantidadEquipos: "20"
    },
    {
        logo: "images/premier.png",
        nombreTorneo: "Premier league",
        cantidadEquipos: "22"
    },
    {
        logo: "images/liga 1.png",
        nombreTorneo: "Liga 1",
        cantidadEquipos: "24"
    },
    {
        logo: "images/seriea.jpg",
        nombreTorneo: "Serie A",
        cantidadEquipos: "26"
    },
    {
        logo: "images/ligaagula.jpg",
        nombreTorneo: "Liga águila",
        cantidadEquipos: "28"
    },

    
   ];

    defer.resolve(misTorneos);

    return promesa;



   }



}