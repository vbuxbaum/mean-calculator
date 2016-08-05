// Export the controller
var myApp = angular.module('myApp', []);

// Defining wrapper Routes for our API
myApp.controller('appCtrl', function appCtrl($scope, $http) {
	$scope.formData = {};

	$http.get('/operations')
		.success(function(data) { 
			$scope.operations = data;
			console.log(data);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});

	$scope.calculateResult = function() {
		$http.get('/calculate', {params: { val1: $scope.formData.val1, op: $scope.formData.op, val2: $scope.formData.val2 }})
			.success(function(data) { 
				$scope.result = data.result;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};
});
