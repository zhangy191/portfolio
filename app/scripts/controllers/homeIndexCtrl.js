angular.module('MyPortfolio').controller('HomeIndexCtrl', function(Projects, $scope){

	$scope.projects = Projects.query();
	
});