const mongoose = require('mongoose')

const CoursesSchema = new mongoose.Schema({
	id: Number,
	title: String,
	img: String,
	description: String,
	star: Number,
	category: String,
	mediasId: [],
	source: String,
	theme: String,
	nbFav: Number,
	createdAt: Date,
	keyWord: []
})

module.exports = mongoose.model('Courses', CoursesSchema, 'Courses')
