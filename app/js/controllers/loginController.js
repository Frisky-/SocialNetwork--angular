app.controller('LoginCtrl', ['$scope','userData', function ($scope, userData) {
	
	$scope.login = function (user) {
		console.log(user);
		userData.login(user);
	}
}])