'use strict';

angular.module('questions').controller('QuestionsController', ['$scope', '$location', 'Questions',
	function($scope, $location, Questions) {
		/// Create new Question
        $scope.create = function() {
        	//Crate new Question object
        	var question = new Questions ({
        		shortname: this.shortname,
        		query: this.query
        	});

            // Redirect after save
            question.$save(function(response) {
            	$location.path('questions/' + response._id);

            // Clear form fields
            $scope.name = '';
        }, function(errorResponse) {
        	$scope.error = errorResponse.data.message;
        });
	};
	    // Find a list of Questions
        $scope.find = function() {
           $scope.questions = Questions.query();
        };
    }
]);
