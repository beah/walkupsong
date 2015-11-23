'use strict';

angular.module('questions').controller('QuestionsController', ['$scope', '$location',
    function($scope, $location) {

        // Create new Question
        $scope.create = function() {
            // Redirect after save
            $location.path('questions');

            // Clear form fields
            $scope.name = '';
        };

        // Find a list of questions
        $scope.find = function() {
            $scope.questions = Questions.query();
        };
    }
]);