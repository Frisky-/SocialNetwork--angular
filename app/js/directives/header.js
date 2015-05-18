app.directive('header', function () {
	return {
		restrict: "E",
		templateUrl: "templates/header.html",
		replace: true,
		controller: "HeaderCtrl"
		}
})