'use strict';

//Setting up route
angular.module('questions').config(['$stateProvider',
	function($stateProvider) {
		// Questions state routing
		$stateProvider.
		state('create-question', {
			url: '/questions/create',
			templateUrl: 'modules/questions/views/create-question.client.view.html'
		}).
		state('questions', {
			url: '/questions',
			templateUrl: 'modules/questions/views/questions.client.view.html'
		});
	}
]);