'use strict';

//Setting up route
angular.module('questions').config(['$stateProvider',
	function($stateProvider) {
		// Questions state routing
		$stateProvider.
		state('questions', {
			url: '/questions',
			templateUrl: 'modules/questions/views/questions.client.view.html'
		});
	}
]);