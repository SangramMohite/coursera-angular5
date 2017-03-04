(function() {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.name = '';
	$scope.portionMessage = "";
	$scope.messageColor="";
  $scope.boxColor="";

	$scope.checkLunchControl = function(){
		var portionMessage = checkLunchPortion($scope.name);
		$scope.portionMessage = portionMessage;

	};

	function checkLunchPortion(string) {
		var input = $scope.name.trim();
		if (input.length == 0) {
			$scope.messageColor = "color: red";
      $scope.boxColor = "border-color:red";
			return "Please enter data first";
		}

		var meals = $scope.name.split(",");
		var count = checkForEmptyString(meals);



		if (count == 0) {
			$scope.messageColor = "color: red";
      $scope.boxColor = "border-color:red";
			return "Please enter data first";
		}
		else if (count <= 3) {
			$scope.messageColor = "color: green";
      $scope.boxColor = "border-color:green";
			return "Enjoy!";
		}
		else {
			$scope.messageColor = "color: green";
      $scope.boxColor = "border-color:green";
			return "Too much!";
		}


	};

	function checkForEmptyString(meals) {
		var count = 0, i = meals.length;
		var trimmedString = "";
		while (i--) {
			trimmedString =  meals[i].trim();
			console.log(trimmedString);
			if (trimmedString.length > 0)
				count++;
		};

		return count;
	};

};



})();
