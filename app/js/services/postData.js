app.factory('postData', ['$resource','$route','baseServiceUrl','authService', function ($resource,$route,baseServiceUrl,authService) {
	
	function addNewPost (params) {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts', null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save(params);

            resource.$promise
                .then(function(data) {
                	alert("New post succesfully added!");
                	$route.reload();
            },function (error) {
                    alert(error.data.message)
                });

           return resource; 
        }

        function likePost (postId) {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + "/likes", null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save();

           return resource; 
        }
        function unlikePost (postId) {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + "/likes", null,
            {
                remove: {
                    method: 'DELETE',
                    headers: headers
                }
            })
            .remove();

           return resource; 
        }

	return {
		addNewPost:addNewPost,
		likePost : likePost,
		unlikePost : unlikePost
	};
}])