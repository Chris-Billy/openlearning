const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	nom: { type: String, default: '', required: false },
	prenom: { type: String, default: '', required: false },
	favoriteCoursesId: { type: Array, required: false },
	learnedMediasId: { type: Array, required: false },
	language: { type: String, default:'fr', required: false }
})

module.exports = mongoose.model('User', UserSchema)
