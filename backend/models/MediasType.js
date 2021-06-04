const mongoose = require('mongoose')

const MediasTypeSchema = new mongoose.Schema({
	type: { type: String, required: true }
})

module.exports = mongoose.model('MediasType', MediasTypeSchema)