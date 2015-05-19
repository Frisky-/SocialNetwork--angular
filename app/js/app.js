var app = angular.module('snApp', ['ngRoute','ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');


app.config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
	$routeProvider.when('/',{
			templateUrl:"templates/home.html",
			controller:"HomeCtrl"
		});
	$routeProvider.when('/profile/password',{
			templateUrl:"templates/changePass.html",
			controller:"ChangePassCtrl"
		});

}]);