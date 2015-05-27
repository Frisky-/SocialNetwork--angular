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

    function searchUsers (searchTerm) {
	 	var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'users/search?searchTerm=' + searchTerm, null,
            {
                query: {
                    method: 'GET',
                    headers: headers,
                    isArray: true
                }
            })
            .query()

           return resource; 
    }

    function getUserFullData (user) {
    	var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'users/' + user, null,
            {
                query: {
                    method: 'GET',
                    headers: headers
                }
            })
            .query()

           return resource; 
    }

    function getUserFriendsPreview (username) {
    	var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'users/' + username + "/friends/preview", null,
            {
                query: {
                    method: 'GET',
                    headers: headers
                }
            })
            .query()

           return resource; 
    }
    function getUserDetailedFriendsPreview (username) {
    	var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'users/' + username + "/friends", null,
            {
                query: {
                    method: 'GET',
                    headers: headers,
                    isArray: true
                }
            })
            .query()

           return resource; 
    }
	return {
		register:registerUser,
		login:loginUser,
		logout:logoutUser,
		search: searchUsers,
		userFullData: getUserFullData,
		userFriendsPreview: getUserFriendsPreview,
		userDetailedFriendsPreview:getUserDetailedFriendsPreview
	};
}])