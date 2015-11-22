'use strict';

module.exports = function(app) {
	var questions = require('../../app/controllers/questions.server.controller');

    app.route('/questions')
      .get(questions.list)
      .post(questions.create);

       // the questionId param is added to the params object for the request
    app.route('/questions/:questionId')
     .get(questions.read);
};