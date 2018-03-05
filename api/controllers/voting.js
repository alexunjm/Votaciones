'use strict'

/* var path = require('path'); */
var moment = require('moment');
/* var mongoosePaginate = require('mongoose-pagination'); */

var Vote = require('../models/vote');

var submitVote = (req, res) => {
	var params = req.body;
	/* console.log(params); */

	if (!params[0].name && !params[0].vote) return res.status(500).send({ status: 'error', message: 'No has enviado un voto válido'})

	var vote = new Vote();
	vote.emmiter_user_id = req.user.sub;
	vote.created_at = moment().unix();
	vote.elected = [];
	params.forEach(aVote => {
		vote.elected.push({ name: aVote.name, number: Number(aVote.number) });
	});

	vote.save((err, voteSubmitted) => {
		if (err) return res.status(200).send({ status: 'error', message: 'Error al recibir el voto' })

		if (!voteSubmitted) {
			return res.status(404).send({ status: 'error', message: 'No se pudo realizar el voto' });
		}
		return res.status(200).send({ status: 'ok', message: 'Tu voto ha sido registrado', vote: voteSubmitted });
	});

};

module.exports = {
	submitVote
}