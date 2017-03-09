angular.module('scapeMaker.front', [])

.controller('frontCtrl', function($scope, Speak) {
	
	$scope.nav = function() {
		
	}

	// Speak.getAll()
	// 	.then(function(res) {
	// 		// Does Speak.getAll return a http responce?
	// 		console.log('here they all are-----+> ', res)
	// 		if (res.body !== undefined) {	
	// 			$scope.allOfThem = res.body



	// 			$scope.currentTitle = scapeObj.title;
	// 			$scope.currentSkyUrl = scapeObj.skyUrl;
	// 			$scope.currentLandUrl = scapeObj.landUrl;
	// 		}
	// 	})
})