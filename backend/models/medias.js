const mongoose = require('mongoose')

const MediasSchema = new mongoose.Schema({
	type: { type: String, required: true },
	title: { type: String, required: true },
	link: { type: String, required: true },
	language: { type: String, required: true },
	level: { type: Number, required: true }
})

module.exports = mongoose.model('Medias', MediasSchema)
