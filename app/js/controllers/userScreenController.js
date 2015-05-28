app.controller('userScreenCtrl', ['$scope','profileData','DEFAULT_IMAGE','PAGE_SIZE', function ($scope,profileData,DEFAULT_IMAGE,PAGE_SIZE) {
	
	$scope.pageSize = PAGE_SIZE;
	$scope.newsFeedData = [];
    $scope.startPostId = '';
    $scope.busy = false;
	$scope.defaultImage = DEFAULT_IMAGE;

	profileData.getOwnFriendsPreview()
		.$promise
		.then(function (data){
			$scope.ownFriendsPreview = data;
		})

	$scope.count = 0;

	$scope.loadFeeds = function () {
		$scope.busy = true;
		profileData.getNewsFeed($scope.startPostId, $scope.pageSize)
		.$promise
		.then(function (data) {
		$scope.newsFeed = data;
		for (var i = 0; i < $scope.newsFeed.length; i++){
			$scope.newsFeedData.push($scope.newsFeed[i]);
		}
		$scope.startPostId = $scope.newsFeedData[$scope.newsFeedData.length - 1].id;
		$scope.busy = false;
		$scope.count+= 5;
		console.log($scope.count)

		})	
	}
	
}])