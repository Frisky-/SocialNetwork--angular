app.controller('FriendsCtrl', ['$scope','$routeParams','profileData','userData', function ($scope,$routeParams,profileData,userData) {
	
	if($routeParams){
		$scope.username = $routeParams.username;
	}

	userData.userFullData($scope.username)
	.$promise
	.then(function (data) {
		$scope.fullData = data;
		console.log(data)
	})


	userData.userDetailedFriendsPreview($scope.username)
	.$promise
	.then(function (data) {
	$scope.userDetailedFriends = data;
	})
}])