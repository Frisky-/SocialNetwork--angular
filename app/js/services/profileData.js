app.factory('profileData', ['$resource','$route','baseServiceUrl','authService', function ($resource,$route,baseServiceUrl,authService) {



	function getProfileInfo() {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'me', null,
            {
                save: {
                    method: 'GET',
                    headers: headers
                }
            })
            .save();
            
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
    

	return {
		getProfileInfo: getProfileInfo,
        changePass: changePass,
        editProfile: editProfile
	};
}])