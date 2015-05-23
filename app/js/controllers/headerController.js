app.controller('HeaderCtrl', ['$scope','profileData','userData','authService', function ($scope, profileData,userData,authService) {
	if(authService.isLoggedIn() == true){
		profileData.getProfileInfo()
		.$promise
		.then(function (data) {
			$scope.user = data;
		})
	}

	$scope.logout = function () {
		userData.logout();
	}

	profileData.getFriendRequests()
	.$promise
	.then(function (data) {
		$scope.requests = data;
		console.log($scope.requests)
	})

	$scope.aproveRequest = function (id) {
		profileData.aproveRequest(id)
	}

	$scope.rejectRequest = function (id) {
		profileData.rejectRequest(id);
	}
}])