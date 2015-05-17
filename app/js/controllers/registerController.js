app.controller('RegisterCtrl', ['$scope','userData', function ($scope, userData) {
	
	$scope.register = function (user) {
		console.log(user);
		userData.register(user);
	}
}])