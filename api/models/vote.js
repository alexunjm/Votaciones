'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = Schema({
	elected: Array,
	emmiter_user_id: { type: Schema.ObjectId, ref: 'User' },
	created_at: String
});

module.exports = mongoose.model('Vote', VoteSchema);