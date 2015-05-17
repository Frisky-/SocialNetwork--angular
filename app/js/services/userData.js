app.factory('userData', ['$resource', 'baseServiceUrl','authService', function ($resource, baseServiceUrl, authService) {
	function registerUser (user) {
		return $resource(baseServiceUrl + "users/register")
		.save(user)
		.$promise
		.then(function (data){
			authService.saveUser(data);
		});
	}

	function loginUser (user) {
		return $resource(baseServiceUrl + "users/login")
		.save(user)
		.$promise
		.then(function (data) {
			authService.saveUser(data);
		})
	}
	return {
		register:registerUser,
		login:loginUser
	};
}])