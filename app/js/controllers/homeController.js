app.controller('HomeCtrl', ['$scope','authService','profileData', function ($scope,authService,profileData) {
	
	$scope.isLoggedIn = authService.isLoggedIn();
	
	
	profileData.getProfileInfo()
	.$promise
	.then(function (data) {
		$scope.username = data.username;
	})
	
	}])