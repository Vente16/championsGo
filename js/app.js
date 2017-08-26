var app = angular.module('ChampionshipGo', 
	['ngRoute', 
	'ui.bootstrap', 
	'ngPagination',
	 'LocalStorageModule']);

// constantes
app.constant("urls", {
    "servidor" : "http://localhost/angularServidor/"
});

