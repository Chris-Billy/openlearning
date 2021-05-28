const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	id: Number,
	email: String,
	password: String,
	nom: String,
	prenom: String,
	favoriteCoursesId: [],
	learnedMediasId: [],
	language: String,
	createdAt: Date
})

module.exports = mongoose.model('User', UserSchema, 'User')
