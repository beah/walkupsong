'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
    Question = mongoose.model('Question'),
    _ = require('lodash');

/**
 * Create a Question
 */
exports.create = function(req, res) {
	var question = new Question(req.body);

    question.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.status(201).json(question);
        }
    });
};

/**
 * Show the current Question
 */
exports.read = function(req, res) {
	Question.findById(req.params.questionId).exec(function(err, question) {
        if (err) {
          return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
          });
      } else {
         if (!question) {
                return res.status(404).send({
                    message: 'Question not found'
                });
            }
            res.json(question);
      }
    });
};

/**
 * Update a Question
 */
exports.update = function(req, res) {

};

/**
 * Delete an Question
 */
exports.delete = function(req, res) {

};

/**
 * List of Questions
 */
exports.list = function(req, res) {
	Question.find().exec(function(err, questions) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(questions);
        }
    });
};