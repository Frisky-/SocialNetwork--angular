var app = angular.module('snApp', ['ngRoute','ngResource','LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');


app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/',{
			templateUrl:"templates/home.html",
			controller:"RegisterCtrl"
		});
});