app.controller('LoginCtrl', ['$scope','authService', function ($scope, authService) {
	
	$scope.login = function (user) {
		console.log(user);
		authService.login(user);
	}
}])