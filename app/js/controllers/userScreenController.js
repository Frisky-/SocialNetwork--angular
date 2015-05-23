app.controller('userScreenCtrl', ['$scope','profileData', function ($scope,profileData) {
	
	$scope.name = "maika ti";

	profileData.getOwnFriends()
		.$promise
		.then(function (data){
			$scope.ownFriends = data;
		})
}])