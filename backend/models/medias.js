const mongoose = require('mongoose')

const MediasSchema = new mongoose.Schema({
	id: Number,
	type: String,
	title: String,
	link: String,
	language: String,
	level: Number
})

module.exports = mongoose.model('Medias', MediasSchema, 'Medias')
