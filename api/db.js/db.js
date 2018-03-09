/*
db.votes.remove({ "_id": "5aa28800f7f9f40a062ba822" })
*/

db.categories.update(
	{ _id: ObjectId("5aa26f0d1a414d49691c26f5") },
	{
		"$set": {
			"candidates": [
				{
					"name": "Maria Fernanda Morales",
					"lastname": "Ana Sofia Usuga",
					"image": "candidato1.jpg",
					"number": 1,
					"color": "#d1ff18"
				},
				{
					"name": "Mariana Arrubla Martinez",
					"lastname": "Maria Jose Castaño",
					"image": "candidato2.jpg",
					"number": 2,
					"color": "#1818ff"
				},
				{
					"name": "Miguel Angel Blandon",
					"lastname": "Michelle Echavarria Rodriguez",
					"image": "candidato3.jpg",
					"number": 3,
					"color": "#ff6d18"
				},
				{
					"name": "Carol Vanegas Jimenez",
					"lastname": "Diego Alejandro Pineda",
					"image": "candidato4.jpg",
					"number": 4,
					"color": "#777777"
				}
			] } }
)