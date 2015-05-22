app.controller('HeaderCtrl', ['$scope','profileData','userData','authService', function ($scope, profileData,userData,authService) {
	if(authService.isLoggedIn() == true){
		profileData.getProfileInfo()
		.$promise
		.then(function (data) {
			$scope.user = data;
			console.log($scope.user);
		})
	}

	$scope.logout = function () {
		userData.logout();
	}

}])