'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Person = Schema({
	name: String,
	number: Number
});

var VoteSchema = Schema({
	elected: [Person],
	emitter_user_id: { type: Schema.ObjectId, ref: 'User' },
	created_at: String
});

module.exports = mongoose.model('Vote', VoteSchema);