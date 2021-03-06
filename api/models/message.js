'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
	emitter_user_id: { type: Schema.ObjectId, ref: 'User' },
	receiver_user_id: { type: Schema.ObjectId, ref: 'User' },
	text: String,
	created_at: String
});

module.exports = mongoose.model('Message', MessageSchema);