app.controller('UserWallCtrl', ['$scope','$routeParams','profileData','userData','postData','commentsData','DEFAULT_IMAGE','PAGE_SIZE', function ($scope,$routeParams,profileData,userData,postData,commentsData,DEFAULT_IMAGE,PAGE_SIZE) {

	 if ($routeParams.username){
        $scope.username = $routeParams.username;
    }
    $scope.pageSize = PAGE_SIZE;
	$scope.postsData = [];
    $scope.startPostId = '';
    $scope.busy = false;
	$scope.defaultImage = DEFAULT_IMAGE;


	
	profileData.getProfileInfo()
	.$promise
	.then(function (data) {
		$scope.ownProfileInfo = data;
	})

	$scope.previewData = function (user) {
		$scope.prevData = {};
		userData.userFullData(user)
		.$promise
		.then(function (data) {
		$scope.prevData = data;
		})
	}

	userData.userFullData($scope.username)
	.$promise
	.then(function (data) {
	$scope.userfullData = data;
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

	$scope.sendRequest = function () {
		profileData.sendRequest($scope.username);
	}

	$scope.loadPosts = function () {
		$scope.busy = true;
		userData.getFriendWall($scope.username,$scope.startPostId, $scope.pageSize)
		.$promise
		.then(function (data) {
		$scope.posts = data;
		for (var i = 0; i < $scope.posts.length; i++){
			$scope.postsData.push($scope.posts[i]);
		}
		if($scope.postsData.length > 0){
			$scope.startPostId = $scope.postsData[$scope.postsData.length - 1].id;
			$scope.busy = false;
		}
		})	
	}

	$scope.addNewPost = function (postContent) {
		$scope.params = {
			'postContent' : postContent,
			'username' : $scope.username
		}
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