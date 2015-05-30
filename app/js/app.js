var app = angular.module('snApp', ['ngRoute','ngResource','file-model','naif.base64','mgcrea.ngStrap','infinite-scroll']);

app.constant({
	'baseServiceUrl': 'http://softuni-social-network.azurewebsites.net/api/',
	'DEFAULT_IMAGE' : 'img/unknown_avatar_tn_sml.png',
	'PAGE_SIZE' : 5
});


app.config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
	$routeProvider.when('/',{
			templateUrl:"templates/home.html",
			controller:"HomeCtrl"
		});
	$routeProvider.when('/profile/password',{
			templateUrl:"templates/changePass.html",
			controller:"ChangePassCtrl"
		});
	$routeProvider.when('/profile',{
			templateUrl:"templates/editProfile.html",
			controller:"EditProfileCtrl"
		});
	$routeProvider.when('/users/:username/friends',{
			templateUrl:"templates/friends.html",
			controller:"FriendsCtrl"
		});
	$routeProvider.when('/users/:username',{
			templateUrl:"templates/userWall.html",
			controller:"UserWallCtrl"
		});
	$routeProvider.otherwise({ redirectTo: '/' })

}]);