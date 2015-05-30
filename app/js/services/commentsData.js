app.factory('commentsData', ['$resource','$route','baseServiceUrl','authService',function ($resource,$route,baseServiceUrl,authService) {
	
	function getPostComments (postId) {
        var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + '/comments', null,
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

    function postComment (postId,commentContent) {
    	var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + "/comments", null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save(commentContent);

            resource.$promise
                .then(function(data) {
                	alert("New comment succesfully added!");
                	$route.reload();
            },function (error) {
                    alert(error.data.message)
                });

           return resource; 
    }

     function likeComment (postId,commentId) {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + '/comments/' + commentId +  "/likes", null,
            {
                save: {
                    method: 'POST',
                    headers: headers
                }
            })
            .save();

           return resource; 
        }

	 function unlikeComment (postId,commentId) {
		var headers = authService.getHeaders();
        var resource = $resource(baseServiceUrl + 'posts/' + postId + '/comments/' + commentId +  "/likes", null,
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
		getComments : getPostComments,
		postComment : postComment,
		likeComment : likeComment,
		unlikeComment : unlikeComment
	};
}])