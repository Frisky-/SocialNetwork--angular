app.controller('ChangePassCtrl', ['$scope',"profileData", function ($scope,profileData) {
	
	$scope.changePass = function (user) {
		profileData.changePass(user);
		console.log(user)
	}
}])