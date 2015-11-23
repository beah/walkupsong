'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
	created: {         
        // types are defined e.g. String, Date, Number (http://mongoosejs.com/docs/guide.html)
        type: Date,   
        // default values can be set
        default: Date.now 
    },
    query: {
        type: String,
        default: '',
        // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
        trim: true,
        unique: true,
        // make this a required field
        required: 'name cannot be blank'
    },
});

// add the model name and schema to the mongoose model.
mongoose.model('Question', QuestionSchema);