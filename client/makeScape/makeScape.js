angular.module('scapeMaker.makeScape', [])

.controller('makeScapeCtrl', function($scope, Speak) {


// angular.module('makeScape', [])

// .controller('makeScapeCtrl', function($scope) {

	// Speak.getAll()
	// 	.then(function(res) {
	// 		console.log("here's the responce-----+> ", res)
	// 		$scope.allOfThem = res.body;
	// 	})

	// if ($scope.allOfThem !== undefined) {
	// $scope.mostRecentSubmission =  $scope.allOfThem[ ($scope.allOfThem.length - 1) ]
	// }

/*
	Speak.getAll()
		.then(function(res) {
			// Does Speak.getAll return a http responce?
			console.log('here they all are-----+> ', res)
			if (res.body !== undefined) {	
				$scope.allOfThem = res.body
				$scope.title = allOfThem[0].title
				$scope.skyUrl = allOfThem[0].skyUrl
				$scope.landUrl = allOfThem[0].landUrl
			}
		})
*/
	// $scope.title = '';
	// $scope.skyUrl = '';
	// $scope.landUrl = '';

	$scope.createScape = function() {

		let scapeObj = {
			title: $scope.title,
			sky: $scope.skyUrl,
			land: $scope.landUrl
		}

		console.log('createScape func called!', scapeObj)

		// console.log('obj we intend to "POST" ', scapeObj)

		// Speak.addOne(scapeObj)
		// 	.then(function(res) {
		// 		console.log('this is the responce after writing to db ---$@#%&#$@--- ', res);
		// 	})
	}


})



// blah blah end of the doc