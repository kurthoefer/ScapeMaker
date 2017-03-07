angular.module('scapeMaker', [
	'scapeMaker.makeScape', 
	'scapeMaker.front',
	'scapeMaker.services', 
	'ngRoute'
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/front', {
			templateUrl: 'front/front.html',
			controller: 'frontCtrl'
		})
		.when('/makeScape', {
			templateUrl: 'makeScape/makeScape.html',
			controller: 'makeScapeCtrl'
		})
		.otherwise({
			redirectTo: '/front'
		})

})