app.controller('userScreenCtrl', ['$scope','profileData', function ($scope,profileData) {
	

	profileData.getOwnFriends()
		.$promise
		.then(function (data){
			$scope.ownFriends = data;
		})
}])