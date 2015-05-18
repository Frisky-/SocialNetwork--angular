app.controller('ProfileCtrl', ['$scope','profileData', function ($scope,profileData) {
	profileData.getProfile()
	.$promise
	.then(function (data) {
		console.log(data);
	})
}])