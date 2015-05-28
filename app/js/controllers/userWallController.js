app.controller('UserWallCtrl', ['$scope','$routeParams','userData','DEFAULT_IMAGE','PAGE_SIZE', function ($scope,$routeParams,userData,DEFAULT_IMAGE,PAGE_SIZE) {

	 if ($routeParams.username){
        $scope.username = $routeParams.username;
    }
    $scope.pageSize = PAGE_SIZE;
	$scope.postsData = [];
    $scope.startPostId = '';
    $scope.busy = false;
	$scope.defaultImage = DEFAULT_IMAGE;
	
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
	})

	$scope.loadPosts = function () {
		$scope.busy = true;
		userData.getFriendWall($scope.username,$scope.startPostId, $scope.pageSize)
		.$promise
		.then(function (data) {
		$scope.posts = data;
		console.log($scope.posts)
		for (var i = 0; i < $scope.posts.length; i++){
			$scope.postsData.push($scope.posts[i]);
		}
		$scope.startPostId = $scope.postsData[$scope.postsData.length - 1].id;
		$scope.busy = false;
		})	
	}
}])