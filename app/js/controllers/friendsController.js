app.controller('FriendsCtrl', ['$scope','$routeParams','profileData','userData','authService','DEFAULT_IMAGE', function ($scope,$routeParams,profileData,userData,authService,DEFAULT_IMAGE) {
	
	if($routeParams){
		$scope.username = $routeParams.username;
		console.log($scope.username);
	}
	$scope.currentUser = authService.getUser().userName;
	$scope.defaultImage = DEFAULT_IMAGE;

	if($scope.currentUser != $scope.username){
	userData.userFullData($scope.username)
	.$promise
	.then(function (data) {
		$scope.fullData = data;
	})}

	if($scope.currentUser != $scope.username){
	userData.userDetailedFriendsPreview($scope.username)
	.$promise
	.then(function (data) {
	$scope.userDetailedFriends = data;
	})}

	if($scope.currentUser == $scope.username){
	profileData.getProfileInfo()
	.$promise
	.then(function (data) {
		$scope.ownInfo = data;
	})}

	if($scope.currentUser == $scope.username){
	profileData.getOwnFriends()
	.$promise
	.then(function (data) {
		$scope.ownFriends = data;
	})}
}])