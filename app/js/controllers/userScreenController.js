app.controller('userScreenCtrl', ['$scope','profileData','postData','commentsData','DEFAULT_IMAGE','PAGE_SIZE', function ($scope,profileData,postData,commentsData,DEFAULT_IMAGE,PAGE_SIZE) {
	
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
		})	
	}

	$scope.addNewComment = function (postId,commentContent) {
		$scope.comment = {
			"commentContent" : commentContent
		}
		commentsData.postComment(postId,$scope.comment);
	}

	$scope.likePost = function (postId) {
		postData.likePost(postId);
	}

	$scope.unlikePost = function (postId) {
		postData.unlikePost(postId);
	}

	$scope.likeComment = function (postId, commentId) {
		commentsData.likeComment(postId,commentId)
	}

	$scope.unlikeComment = function (postId, commentId) {
		commentsData.unlikeComment(postId,commentId)
	}
	
}])