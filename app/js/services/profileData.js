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
    

	return {
		getProfileInfo: getProfileInfo
	};
}])