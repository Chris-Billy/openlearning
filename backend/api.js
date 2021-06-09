// Simple Express Backend to manage API calls for Mongo Database
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const sha256 = require('js-sha256')
const cors = require('cors')
const app = express()
const secret = 'maelwalidchrisandre' // unique key for auth
const mongoose = require('mongoose')

require('dotenv').config()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// Connexion to Mongodb database
try {
	mongoose.connect(
		'mongodb://' +
			process.env.DB_USER +
			':' +
			process.env.DB_PASS +
			'@' +
			process.env.DB_HOST +
			':' +
			process.env.DB_PORT +
			'/' +
			process.env.DB_NAME,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
} catch (error) {
	console.log(error)
}

// Import de nos Schémas mongoose
const TypeMedia = require('./models/MediasType')
const Medias = require('./models/Medias')
const Courses = require('./models/Courses')
const User = require('./models/User')

const typeMedia = [
	'video',
	'cours',
	'article',
	'audio',
	'ivy league',
	'livre',
	'exercice',
	'cheat sheet',
	'outil'
]

// for testing purposes / mock tests @todo @fixme
const medias = [
	{
		id: 2,
		type: typeMedia[0], // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to make french croissants',
		link: 'https://www.youtube.com/watch?v=yw-4zNOYTjI',
		language: 'fr',
		level: 0
	},
	{
		id: 3,
		type: typeMedia[1], // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html',
		language: 'en',
		level: 1
	},
	{
		id: 7,
		type: typeMedia[2], // cas possibles : audio, video, book, cheatsheet,...
		title: 'All about Python',
		link: 'https://www.lebigdata.fr/python-langage-definition',
		language: 'fr',
		level: 2
	},
	{
		id: 340,
		type: typeMedia[1], // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html',
		language: 'en',
		level: 1
	}
]

// const courses = [
// 	{
// 		id: 818,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 84,
// 		title: 'The Basics of IOS dev (2)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 90,
// 		createdAt: 1620518400,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 74,
// 		title: 'The Basics of JS (3)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.1',
// 		category: 'Javascript',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 80,
// 		createdAt: 1620604800,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 94,
// 		title: 'The Basics of IOS dev (4)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.9',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 70,
// 		createdAt: 1620691200,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 841,
// 		title: 'The Basics of IOS dev (5)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '2.1',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 60,
// 		createdAt: 1620777600,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 811,
// 		title: 'The Basics of IOS dev (6)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 50,
// 		createdAt: 1620864000,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 89,
// 		title: 'The Basics of IOS dev (7)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 40,
// 		createdAt: 1620950400,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 1,
// 		title: 'The Basics of IOS dev (8)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '1',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 30,
// 		createdAt: 1621036800,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 12,
// 		title: 'The Basics of IOS dev (9)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 20,
// 		createdAt: 1621123200,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 22,
// 		title: 'The Basics of IOS dev (10)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '3.1',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 10,
// 		createdAt: 1621209600,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 10,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.2',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 14,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '1.6',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 4,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '0.5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 819,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 817,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 816,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 815,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 814,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 813,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 812,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 822,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 821,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 890,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 891,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 893,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 895,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 899,
// 		title: 'The Basics of IOS dev',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '5',
// 		category: 'Swift',
// 		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Job', // type de parcours métier ou compétence
// 		nbFav: 0,
// 		createdAt: 1611134752,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios'
// 		]
// 	},
// 	{
// 		id: 127,
// 		title: 'How to learn Agile with André (1)',
// 		img: '',
// 		description:
// 			'Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes, qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti.',
// 		star: '4.7',
// 		category: 'Agile',
// 		mediasId: [2, 7, 3], // Ici on a que 2 médias pour le cours ci-dessus
// 		source: 'openlearning', // openlearning ou contributeur externe
// 		theme: 'Skill', // type de parcours métier ou compétence
// 		nbFav: 100,
// 		createdAt: 1620259200,
// 		keyWord: [
// 			'vuejs',
// 			'nodejs',
// 			'swift',
// 			'javascript',
// 			'html',
// 			'css',
// 			'mobile',
// 			'ios',
// 			'test'
// 		]
// 	}
// ]

// const user = {
// 	id: 150, // id bidon pour répliquer le comportement d'une bdd nosql
// 	email: 'a@a.fr',
// 	password: '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', // aaaa
// 	firstname: 'Endray',
// 	lastname: 'De Sousa',
// 	myfavoritecoursesId: [
// 		{
// 			id: 127,
// 			done: false
// 		},
// 		{
// 			id: 84,
// 			done: true
// 		}
// 	],
// 	learnedmediasId: [7, 340, 2] // gestion de la progression (checkbox), medias terminés indépendamment d'un parcours de compétences ou métier
// }

// Get header bearer
const extractBearerToken = (headerValue) => {
	if (typeof headerValue !== 'string') {
		return false
	}
	const matches = headerValue.match(/(bearer)\s+(\S+)/i)
	return matches && matches[2]
}

// Check token
const checkToken = (req, res, next) => {
	// get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)

	// token exist ?
	if (!token) {
		return res.status(401).json({ message: 'Error. No token provided...' })
	}

	// Véracité du token
	jwt.verify(token, secret, (err, decodedToken) => {
		if (err) {
			res
				.status(401)
				.json({ message: 'Error. Invalid Authentication or Bad token...' })
		} else {
			return next()
		}
	})
}

app.post('/login', (req, res) => {
	User.findOne({ email: req.body.email, password: sha256(req.body.password) })
		.then((user) => {
			// Check identifiants
			if (
				req.body.email === user.email &&
				sha256(req.body.password) === user.password
			) {
				// If ids ok, generate token and user data
				const token = jwt.sign(
					{
						userid: user.id,
						email: user.email,
						password: user.password,
						firstname: user.firstname,
						lastname: user.lastname,
						favoriteCoursesId: user.favoriteCoursesId,
						learnedMediasId: user.learnedMediasId,
						language: user.language
					},
					secret,
					{ expiresIn: '3 hours' }
				)
				res.json({ access_token: token })
			}
			// If Ids wrong, send bad authentification information
			else {
				res.status(400).json({
					message: 'Mauvais mot de passe ou email'
				})
			}
		})
		.catch((error) => res.status(404).json({ error }))
})

// nuxt auth user Route, provides userdata for vuex store, after nuxt auth login
app.get('/userauth', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token
	const decoded = jwt.decode(token, { complete: false })
	return res.json({ user: decoded })
})

// Create a user in database
app.post('/user', (req, res) => {
	const user = new User({
		email: req.body.email,
		password: sha256(req.body.password)
	})
	user
		.save()
		.then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
		.catch((error) => res.status(400).json({ error }))
})

// api route to get user information,favorite courses, course progression
app.get('/user', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token to retrieve id of user connected
	const decoded = jwt.decode(token, { complete: false })
	// query mongodb with decoded.userid to retrieve all user connected information
	User.findOne({ _id: decoded.userid })
		.then((user) => {
			if (user.id === decoded.userid) {
				// TODO mongoose query, for now just a mock from user
				return res.status(201).json(user)
			} else {
				return res.json({ message: 'This user id does not exist in database' })
			}
		})
		.catch((error) => res.status.apply(401).json({ error }))
})

// Get all users from database
app.get('/users', (req, res) => {
	User.find()
		.then((users) => res.status(200).json(users))
		.catch((error) => res.status(400).json({ error }))
})

// Delete a user in database
app.delete('/user', (req, res) => {
	User.remove({ _id: req.body.id }).then(() =>
		res
			.status(201)
			.json({ message: 'Utilisateur supprimé' })
			.catch((error) => res.status(400).json({ error }))
	)
})

// api route to get all user favorite courses from the user connected
app.get('/user/:id/courses', checkToken, (req, res) => {
	User.findOne({ _id: req.params.id })
		.then((user) => res.status(201).json(user.learnedMediasId))
		.catch((error) => res.status(400).json({ error }))
})

// Create a media type
app.post('/mediaType', (req, res) => {
	const mediaType = new TypeMedia({
		type: req.body.type
	})
	mediaType
		.save()
		.then(() => res.status(201).json({ message: 'Type de média créé !' }))
		.catch((error) => res.status(400).json({ error }))
})

// Get all media type
app.get('/mediasType', (req, res) => {
	TypeMedia.find()
		.then((mediasType) => res.status(201).json(mediasType))
		.catch((error) => res.status(400).json({ error }))
})

// Create a course
app.post('/course', (req, res) => {
	const course = new Courses({
		...req.body
	})
	course
		.save()
		.then(() => res.status(201).json({ message: 'Cours créé !' }))
		.catch((error) => res.status(400).json({ error }))
})

// Get all courses
app.get('/courses', (req, res) => {
	Courses.find()
		.then((courses) => res.status(201).json(courses))
		.catch((error) => res.status(400).json({ error }))
})

// Delete a course
app.delete('/course', (req, res) => {
	Courses.remove({
		_id: req.body.id
	})
		.then(() => res.status(201).json({ message: 'Cours supprimé !' }))
		.catch((error) => res.status(400).json({ error }))
})

// Route vers un cours sélectionné
app.get('/course/:id', (req, res) => {
	Courses.findOne({ _id: req.params.id })
		.then((course) => res.status(201).json(course))
		.catch((error) => res.status(400).json({ error }))
})

// Route vers les médias d'un cours sélectionné
app.post('/medias', (req, res) => {
	const typeMedia = req.body.typeMedia
	// Initialisation d'un objet qui contiendra tous les médias
	const allMedias = {}
	// On ajoute tous les types de médias
	typeMedia.forEach((type) => {
		allMedias[type.type] = []
	})
	// On envoie chaque média dans la catégorie qui lui correspond
	const idsMedias = req.body.mediasId
	idsMedias.forEach((id) => {
		medias.forEach((media) => {
			if (id == media.id) {
				allMedias[media.type].push(media)
			}
		})
	})
	return res.json(allMedias)
})

app.post('/courses/actuals', (req, res) => {
	Courses.find()
		.then((courses) => {
			const allCourses = []
			const idsCourses = req.body
			courses.forEach((cours) => {
				idsCourses.forEach((pos) => {
					if (cours.id == pos.id && !pos.done) {
						allCourses.push(cours)
					}
				})
			})
			return res.status(201).json(allCourses)
		})
		.catch((error) => res.status(400).json({ error }))
})

app.post('/courses/done', (req, res) => {
	Courses.find()
		.then((courses) => {
			const allCourses = []
			const idsCourses = req.body
			courses.forEach((cours) => {
				idsCourses.forEach((pos) => {
					if (cours.id == pos.id && pos.done) {
						allCourses.push(cours)
					}
				})
			})
			return res.status(201).json(allCourses)
		})
		.catch((error) => res.status(400).json({ error }))
})

// Get the 10 most rated courses
app.get('/mostRatedCourses', (req, res) => {
	Courses.find()
		.then((courses) => {
			const rated = courses
				.slice()
				.sort((a, b) => {
					return b.star - a.star
				})
				.slice(0, 10)
			return res.status(201).json(rated)
		})
		.catch((error) => res.status(400).json({ error }))
})

// Get the 10 most popular courses
app.get('/mostPopularCourses', (req, res) => {
	Courses.find()
		.then((courses) => {
			const popular = courses
				.slice()
				.sort((a, b) => {
					return b.nbFav - a.nbFav
				})
				.slice(0, 10)
			return res.status(201).json(popular)
		})
		.catch((error) => res.status(400).json({ error }))
})

// Get the 10 most recent courses
app.get('/mostRecentCourses', (req, res) => {
	Courses.find()
		.then((courses) => {
			const recent = courses
				.slice()
				.sort((a, b) => {
					return new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000)
				})
				.slice(0, 10)
			return res.status(201).json(recent)
		})
		.catch((error) => res.status(400).json({ error }))
})

app.post('/searchByJob', (req, res) => {
	Crouses.find()
		.then((courses) => {
			// Initialisation d'un objet qui contiendra tous les médias
			const jobResult = []
			// On envoie chaque média dans la catégorie qui lui correspond
			const input = Object.keys(req.body)
			const jobCourses = []
			courses.forEach((x) => {
				if (x.theme.includes('Job')) {
					jobCourses.push(x)
				}
			})
			jobCourses.forEach((course) => {
				// console.log(course.keyWord)
				if (course.keyWord.includes(input[0].toLowerCase())) {
					jobResult.push(course)
				}
			})
			return res.status(201).json(jobResult)
		})
		.catch((error) => res.status(400).json({ error }))
})

app.post('/searchBySkill', (req, res) => {
	Courses.find()
		.then((courses) => {
			// Initialisation d'un objet qui contiendra tous les médias
			const skillResult = []
			// On envoie chaque média dans la catégorie qui lui correspond
			const input = Object.keys(req.body)
			const skillCourses = []
			courses.forEach((x) => {
				if (x.theme.includes('Skill')) {
					skillCourses.push(x)
				}
			})
			skillCourses.forEach((course) => {
				// console.log(course.keyWord)
				if (course.keyWord.includes(input[0].toLowerCase())) {
					skillResult.push(course)
				}
			})
			return res.status(201).json(skillResult)
		})
		.catch((error) => res.status(400).json({ error }))
})

module.exports = app
