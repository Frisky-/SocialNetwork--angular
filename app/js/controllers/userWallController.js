app.controller('UserWallCtrl', ['$scope','$routeParams','userData', function ($scope,$routeParams,userData) {

	 if ($routeParams.username){
        $scope.username = $routeParams.username;
    }

	
	userData.userFullData($scope.username)
	.$promise
	.then(function (data) {
	$scope.fullData = data;
	})
	
	userData.userFriendsPreview($scope.username)
	.$promise
	.then(function (data) {
		$scope.userFriends = data;
	})

	userData.userDetailedFriendsPreview($scope.username)
	.$promise
	.then(function (data) {
		$scope.userDetailedFriends = data;
		console.log($scope.userDetailedFriends)
	})
}])