app.controller('EditProfileCtrl', ['$scope','$resource','authService','profileData', function($scope,$resource, authService,profileData){
	if(authService.isLoggedIn() == true){
		profileData.getProfileInfo()
		.$promise
		.then(function (data) {
			$scope.user = data;
		})
	}
	$scope.profileImage = null;
    $scope.coverImage = null;
      
	$scope.editProfile = function (params) {
		var params = params;
		var output = {};
		output.email = params.email;
		output.gender = params.gender;
		output.name = params.name;
		
		if(angular.equals(params.profileImage, undefined) === false){
			output.profileImageData = params.profileImage.base64;
		}
		if(angular.equals(params.coverImage, undefined) === false){
			output.coverImageData = params.coverImage.base64;
		}

      profileData.editProfile(output);
	}

	$scope.profileImage = function(fileInputField) {
    var file = fileInputField.files[0];
    if (file.type.match(/image\/.*/)) {
        var reader = new FileReader();
        reader.onload = function() {
            // $scope.user.profileImageData = reader.result;
            $(".profileImage-box").html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    } else {
        $(".profileImage-box").html("<p>File type not supported!</p>");
    }
	};

	$scope.coverImage = function(fileInputField) {
    var file = fileInputField.files[0];
    if (file.type.match(/image\/.*/)) {
        var reader = new FileReader();
        reader.onload = function() {
            // $scope.user.coverImageData = reader.result;
            $(".coverImage-box").html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    } else {
        $(".coverImage-box").html("<p>File type not supported!</p>");
    }
	};

}])