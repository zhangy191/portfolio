angular.module('MyPortfolio').controller("ModalCtrl", function($scope, $modal, $document) {

	$scope.currentIndex = 0;

	$scope.slickConfig = {
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		method: {},
		event: {
			init: function(event, slick) {
				slick.slickGoTo($scope.currentIndex, true);
			}
		}
	};

	$scope.open = function(index) {
		$scope.currentIndex = index;

		var modalInstance = $modal.open({
			templateUrl: 'modalContent.html',
			controller: 'ModalInstanceCtrl',
			resolve: {
				project: function() {
					return $scope.project
				},
				slickConfig: function() {
					return $scope.slickConfig
				}
			}
		});

		var _modalOpenCallback = function() {
			var scrollTop = $document.scrollTop();

			$document.find('.main-content').css({
				position: 'fixed',
				top: -scrollTop,
				width: '100%'
			});
		};

		var _modalCloseCallback = function() {
			var scrollTop = -parseInt($document.find('.main-content').css('top'), 10);

			$document.find('.main-content').removeAttr('style');
			$document.scrollTop(scrollTop);	
		};

		modalInstance.opened.then(function() {
			_modalOpenCallback();
		});

		modalInstance.result.then(function() {
			_modalCloseCallback();
		}, function() {
			_modalCloseCallback();
		});

	};

});

angular.module('MyPortfolio').controller("ModalInstanceCtrl", function($scope, $modalInstance, project, slickConfig) {
	$scope.project = project;
	$scope.slickConfig = slickConfig;

	$scope.close = function() {
		$modalInstance.close();
	};

});
