app.factory('authService', [  function () {
	
	var key = 'user';

	function saveUserData (data) {
		localStorage.setItem(key, angular.toJson(data));
	}

	function getUserData () {
		return angular.fromJson(localStorage.getItem(key));
	}

	function getHeaders (argument) {
		var headers = {};
		var userData = getUserData();
		if(userData){
			headers.sessionToken = 'Bearer ' + getUserData().access_token;
		}
		return headers;
	}

	function logoutUser () {
		localStorage.removeItem(key);
	}

	function isLoggedIn () {
		return !!getUserData();
	}

	function getUserId (userId) {
		return userId;
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		logoutUser: logoutUser,
		isLoggedIn: isLoggedIn,
		getUserId: getUserId
	};
}])