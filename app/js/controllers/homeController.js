app.controller('HomeCtrl', ['$scope','authService','profileData', function ($scope,authService,profileData) {
	
	$scope.isLoggedIn = authService.isLoggedIn();
	
}])