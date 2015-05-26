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
	})

	$scope.aproveRequest = function (id) {
		profileData.aproveRequest(id)
	}

	$scope.rejectRequest = function (id) {
		profileData.rejectRequest(id);
	}
	
	// $scope.searchUser = function (searchTerm) {
	// 		userData.search(searchTerm);
	// }
	
	$scope.searchUser = function (searchTerm) {	
		$scope.displaySearchResults = false;
		if(searchTerm != undefined && searchTerm != ""){
		userData.search(searchTerm)
		.$promise
		.then(function (data) {
			if(data.length > 0){
			$scope.searchResults = data;
			console.log($scope.searchResults[0]);
			$scope.displaySearchResults = true;
			}else if(data.length = 0){
				console.log(data.length)
			}
		})
		}
	}


}])