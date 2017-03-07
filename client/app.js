agular.module('scapeMaker', [
	'scapeMaker.makeScape', 
	'scapeMaker.front' 
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/front', {
			templateUrl: 'front/front.html'
			controller: 'frontCtrl'
		})
		.when('/makeScape', {
			templateUrl: 'makeScape/makeScape.html'
			controller: 'makeScapeCtrl'
		})

})