angular.module('scapeMaker.services', [])

.factory('Speak', function($http) {

	// let getAll = function() {
	// 	return $http({
	// 		method: 'GET',
	// 		url: ''
	// 	})
	// 	.then(function(res) {
	// 		return res.data;
	// 	});
	// };
		// .get('/front')

	var addOne = function (theGoods) {
    return $http({
      method: 'POST',
      url: '/api/addOne',
      data: theGoods
    })
    .then(function (res) {
      return res;
    });
  };
  
  return {
    // getAll: getAll,
    addOne: addOne
  };

})