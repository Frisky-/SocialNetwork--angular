app.factory('profileData', ['$resource','$route','baseServiceUrl','authService', function ($resource,$route,baseServiceUrl,authService) {



	function getProfileInfo() {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'me', null,
            {
                get: {
                    method: 'GET',
                    headers: headers
                }
            })
            .get();
            
           return resource; 
        }

    function changePass(params) {
        var headers = authService.getHeaders();
        var resource = $resource({} , {},
            {
                update: {
                    url: baseServiceUrl + "me/changepassword",
                    method: 'PUT',
                    headers: headers
                }
            })
            .update(params);

            resource.$promise
                .then(function(data) {
                    alert(data.message);
                },
                function (error) {
                    alert(error.data.message)
                });

            return resource;
        }

    function editProfile(params) {
    var headers = authService.getHeaders();
    var resource = $resource({} , {},
        {
            update: {
                url: baseServiceUrl + "me",
                method: 'PUT',
                headers: headers
            }
        })
        .update(params);

        resource.$promise
            .then(function(data) {
                alert(data.message);
                $route.reload();
            },
            function (error) {
                alert(error.data.message)
            });

        return resource;
    }

    function getOwnFriends () {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'me/friends', null,
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

    function getFriendRequests () {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + '/me/requests', null,
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
    function aproveRequest(id) {
    var headers = authService.getHeaders();
    var resource = $resource({} , {},
        {
            update: {
                url: baseServiceUrl + "me/requests/" + id + "?status=approved",
                method: 'PUT',
                headers: headers
            }
        })
        .update(id);
        $route.reload();
        
        return resource;
    }

    function rejectRequest(id) {
    var headers = authService.getHeaders();
    var resource = $resource({} , {},
        {
            update: {
                url: baseServiceUrl + "me/requests/" + id + "?status=delete",
                method: 'PUT',
                headers: headers
            }
        })
        .update(id);
         $route.reload();

        return resource;
    }

	return {
		getProfileInfo: getProfileInfo,
        changePass: changePass,
        editProfile: editProfile,
        getOwnFriends: getOwnFriends,
        getFriendRequests: getFriendRequests,
        aproveRequest: aproveRequest,
        rejectRequest: rejectRequest
	};
}])