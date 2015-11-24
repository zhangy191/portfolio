angular.module('MyPortfolio').directive("projectNavDir", function(Projects){
	return {
		restrict: 'E',
		templateUrl: 'templates/projects/subnav.html',
		controller: function($scope, $routeParams){
			Projects.query(function(data) {		
				var index;

				data.forEach(function(val, ind){
					if (val.id === $routeParams.id) {
						index = ind;
					}
				});

				if (index === 0) {
					$scope.navgroup = [null, data[index + 1]];
				} else if (index === data[data.length - 1]) {
					$scope.navgroup = [data[index - 1], null];
				} else {
					$scope.navgroup = data.filter(function(val, ind){
						return index === ind - 1 || index === ind + 1;
					});
				}

			});

			$scope.alignNav = function(nav) {
				return $scope.navgroup.indexOf(nav) === 0 ? 'left' : 'right';
			};
		}
	};
});