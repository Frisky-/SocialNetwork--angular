app.controller('ChangePassCtrl', ['$scope',"profileData", function ($scope,profileData) {
	
	$scope.changePass = function (userPass) {
		profileData.changePass(userPass);
	}
}])