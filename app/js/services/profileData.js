app.factory('profileData', ['$resource','baseServiceUrl','authService', function ($resource,baseServiceUrl,authService) {



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
    

	return {
		getProfileInfo: getProfileInfo,
        changePass: changePass
	};
}])