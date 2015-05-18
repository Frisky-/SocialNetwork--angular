app.factory('userData', ['$resource', "$location", "$route", 'baseServiceUrl','authService', function ($resource, $location, $route, baseServiceUrl, authService) {
	function registerUser (user) {
		return $resource(baseServiceUrl + "users/register")
		.save(user)
		.$promise
		.then(function (data){
			authService.saveUser(data);
			$route.reload();
			$location.path('/');
		},
		function (error) {
			for (msg in error.data.modelState){
				alert(error.data.modelState[msg])
			}

		});
	}

	function loginUser (user) {
		return $resource(baseServiceUrl + "users/login")
		.save(user)
		.$promise
		.then(function (data) {
			authService.saveUser(data);
			$route.reload();
			$location.path('/');
			},
			function (error) {
				alert(error.data.error_description);
		})
	}

	function logoutUser () {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'users/logout', null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save();

            resource.$promise
                .then(function() {
                authService.logoutUser();
                $route.reload();
            });

           return resource; 
        }
	return {
		register:registerUser,
		login:loginUser,
		logout:logoutUser
	};
}])