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
		language: 'fr'
	},
	{
		id: 3,
		type: typeMedia[1], // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html',
		language: 'en'
	},
	{
		id: 7,
		type: typeMedia[2], // cas possibles : audio, video, book, cheatsheet,...
		title: 'All about Python',
		link: 'https://www.lebigdata.fr/python-langage-definition',
		language: 'fr'
	},
	{
		id: 340,
		type: typeMedia[1], // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html',
		language: 'en'
	}
]

const courses = [
	{
		id: 818,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 84,
		title: 'The Basics of IOS dev (2)',
		star: '4.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 90,
		createdAt: 1620518400
	},
	{
		id: 74,
		title: 'The Basics of JS (3)',
		star: '4.1',
		category: 'Javascript',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 80,
		createdAt: 1620604800
	},
	{
		id: 94,
		title: 'The Basics of IOS dev (4)',
		star: '4.9',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 70,
		createdAt: 1620691200
	},
	{
		id: 841,
		title: 'The Basics of IOS dev (5)',
		star: '2.1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 60,
		createdAt: 1620777600
	},
	{
		id: 811,
		title: 'The Basics of IOS dev (6)',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 50,
		createdAt: 1620864000
	},
	{
		id: 89,
		title: 'The Basics of IOS dev (7)',
		star: '4',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 40,
		createdAt: 1620950400
	},
	{
		id: 1,
		title: 'The Basics of IOS dev (8)',
		star: '1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 30,
		createdAt: 1621036800
	},
	{
		id: 12,
		title: 'The Basics of IOS dev (9)',
		star: '4.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 20,
		createdAt: 1621123200
	},
	{
		id: 22,
		title: 'The Basics of IOS dev (10)',
		star: '3.1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 10,
		createdAt: 1621209600
	},
	{
		id: 10,
		title: 'The Basics of IOS dev',
		star: '4.2',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 14,
		title: 'The Basics of IOS dev',
		star: '1.6',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 4,
		title: 'The Basics of IOS dev',
		star: '0.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 819,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 817,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 816,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 815,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 814,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 813,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 812,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 822,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 821,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 890,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 891,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 893,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 895,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 899,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job', // type de parcours métier ou compétence
		nbFav: 0,
		createdAt: 1611134752
	},
	{
		id: 127,
		title: 'How to learn Agile with André (1)',
		star: '4.7',
		category: 'Agile',
		mediasId: [2, 7, 3], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill', // type de parcours métier ou compétence
		nbFav: 100,
		createdAt: 1620259200
	}
]

const user = {
	id: 150, // id bidon pour répliquer le comportement d'une bdd nosql
	email: 'a@a.fr',
	password: '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', // aaaa
	firstname: 'Endray',
	lastname: 'De Sousa',
	myfavoritecoursesId: [
		{
			id: 127,
			done: false
		},
		{
			id: 84,
			done: true
		}
	],
	learnedmediasId: [7, 340, 2] // gestion de la progression (checkbox), medias terminés indépendamment d'un parcours de compétences ou métier
}

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
	// Check identifiants
	if (
		req.body.email === user.email &&
		sha256(req.body.password) === user.password
	) {
		// If ids ok, generate token and user data
		const token = jwt.sign(
			{
				userid: user.id
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

// nuxt auth user Route, provides userdata for vuex store, after nuxt auth login
app.get('/userauth', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token
	const decoded = jwt.decode(token, { complete: false })
	return res.json({ user: decoded })
})

// api route to get user information,favorite courses, course progression
app.get('/user', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token to retrieve id of user connected
	const decoded = jwt.decode(token, { complete: false })
	// query mongodb with decoded.userid to retrieve all user connected information
	if (user.id === decoded.userid) {
		// TODO mongoose query, for now just a mock from user
		return res.json(user)
	} else {
		return res.json({ message: 'This user id does not exist in database' })
	}
})

// api route to get all user favorite courses from the user connected
app.get('/user/:id/courses', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token to retrieve id of user connected
	const decoded = jwt.decode(token, { complete: false })
	// query mongodb with decoded.userid to retrieve all user favorite courses
	if (req.params.id == decoded.userid) {
		// TODO mongoose query, for now just a mock from courses
		return res.json(user.learnedmediasId)
	} else {
		return res.json({
			message: 'No favorites courses found for this user id in database'
		})
	}
})

// Route vers un cours sélectionné
app.get('/course/:id', (req, res) => {
	courses.forEach((course) => {
		if (req.params.id == course.id) {
			return res.json(course)
		}
	})
})

// Route vers les médias d'un cours sélectionné
app.post('/medias', (req, res) => {
	// Initialisation d'un objet qui contiendra tous les médias
	const allMedias = {}
	// On ajoute tous les types de médias
	typeMedia.forEach((type) => {
		allMedias[type] = []
	})
	// On envoie chaque média dans la catégorie qui lui correspond
	const idsMedias = req.body
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
	const allCourses = []
	const idsCourses = req.body
	courses.forEach((cours) => {
		idsCourses.forEach((pos) => {
			if (cours.id == pos.id && !pos.done) {
				allCourses.push(cours)
			}
		})
	})
	return res.json(allCourses)
})

app.post('/courses/done', (req, res) => {
	const allCourses = []
	const idsCourses = req.body
	courses.forEach((cours) => {
		idsCourses.forEach((pos) => {
			if (cours.id == pos.id && pos.done) {
				allCourses.push(cours)
			}
		})
	})
	return res.json(allCourses)
})

// Get the 10 most rated courses
app.get('/mostRatedCourses', (req, res) => {
	const rated = courses
		.slice()
		.sort((a, b) => {
			return b.star - a.star
		})
		.slice(0, 10)
	return res.json(rated)
})

// Get the 10 most popular courses
app.get('/mostPopularCourses', (req, res) => {
	const popular = courses
		.slice()
		.sort((a, b) => {
			return b.nbFav - a.nbFav
		})
		.slice(0, 10)
	return res.json(popular)
})

// Get the 10 most recent courses
app.get('/mostRecentCourses', (req, res) => {
	const recent = courses
		.slice()
		.sort((a, b) => {
			return new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000)
		})
		.slice(0, 10)
	return res.json(recent)
})

app.get('/allCourses', (req, res) => {
<<<<<<< HEAD
    return res.json(courses)
=======
	return res.json(courses)
>>>>>>> 4897e517622f8efcd16ffb8dc6fca70b276ee626
})

module.exports = app
