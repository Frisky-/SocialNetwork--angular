app.factory('authService', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
	function registerUser (user) {
		return $resource(baseServiceUrl + "users/register")
		.save(user);
	}

	function loginUser (user) {
		return $resource(baseServiceUrl + "users/login")
		.get(user);
	}
	return {
		register:registerUser,
		login:loginUser
	};
}])