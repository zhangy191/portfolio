angular.module('MyPortfolio').factory('Projects', function($resource){
	return $resource('JSON/projects.json');
});