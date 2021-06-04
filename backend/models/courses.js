const mongoose = require('mongoose')

const CoursesSchema = new mongoose.Schema({
	title: { type: String, required: true },
	img: { type: String, required: true },
	description: { type: String, required: true },
	star: { type: Number, required: false },
	category: { type: String, required: true },
	mediasId: { type: Array, required: true },
	source: { type: String, required: true },
	theme: { type: String, required: true },
	nbFav: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now, required: true },
	keyWord: { type: Array, required: true }
})

module.exports = mongoose.model('Courses', CoursesSchema)
