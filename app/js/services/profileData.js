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

    function getOwnFriendsPrewview () {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'me/friends/preview', null,
            {
                query: {
                    method: 'GET',
                    headers: headers
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

    function sendFriendRequest (username) {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'me/requests/' + username, null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save()

            .$promise
            .then(function () {
                alert("Friend requests sended!");
                $scope.$apply();
            })

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
                url: baseServiceUrl + "me/requests/" + id + "?status=rejected",
                method: 'PUT',
                headers: headers
            }
        })
        .update(id);
         $route.reload();

        return resource;
    }
    
     function getNewsFeedPages (startPostId, pageSize) {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + '/me/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize, null,
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
		getProfileInfo: getProfileInfo,
        changePass: changePass,
        editProfile: editProfile,
        getOwnFriends: getOwnFriends,
        getOwnFriendsPreview: getOwnFriendsPrewview,
        getFriendRequests: getFriendRequests,
        sendRequest : sendFriendRequest,
        aproveRequest: aproveRequest,
        rejectRequest: rejectRequest,
        getNewsFeed: getNewsFeedPages
	};
}])