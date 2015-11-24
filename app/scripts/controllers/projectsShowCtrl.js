angular.module('MyPortfolio').controller('ProjectsShowCtrl', function(Projects, $scope, $routeParams, $rootScope){	
	
	Projects.query(function(data) {
		var projects = data.filter(function(val){
			return val.id == $routeParams.id;
		});

		$scope.project = projects[0];
	});

	$rootScope.navClicked = true;
	
});