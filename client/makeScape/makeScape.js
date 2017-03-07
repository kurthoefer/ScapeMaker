angular.module('scapeMaker.makeScape' [])

.controller('makeScapeCtrl', function($scope, Speak) {

	$scope.allOfThem = {
		title: $scope.title,
			sky: $scope.sky,
			land: $scope.land
	}

	Speak.getAll()
		.then(function(allOfThem) {
			console.log('here they all are-----+> ', allOfThem)
			$scope.allOfThem = allOfThem
		})
	

	let createScape = function() {

		let scapeObj = {
			title: $scope.title,
			sky: $scope.sky,
			land: $scope.land
		}

		Speak.addOne(scapeObj)
			.then(function(res) {
				console.log('this is the responce after writing to db ---$@#%&#$@--- ', res);

			})
	}


})