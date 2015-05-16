app.controller('RegisterCtrl', ['$scope','authService', function ($scope, authService) {
	
	$scope.register = function (user) {
		console.log(user);
		authService.register(user);
	}
}])