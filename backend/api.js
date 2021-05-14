// Simple Express Backend to manage API calls for Mongo Database

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const sha256 = require('js-sha256')
const cors = require('cors')
const { theme } = require('~/tailwind.config')
const app = express()
const secret = 'maelwalidchrisandre' // unique key for auth

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// for testing purposes / mock tests @todo @fixme
const medias = [
	{
		id: 2,
		type: 'video', // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to make french croissants',
		link: 'https://www.youtube.com/watch?v=yw-4zNOYTjI'
	},
	{
		id: 3,
		type: 'cours', // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html'
	},
	{
		id: 7,
		type: 'article', // cas possibles : audio, video, book, cheatsheet,...
		title: 'All about Python',
		link: 'https://www.lebigdata.fr/python-langage-definition'
	},
	{
		id: 340,
		type: 'cours', // cas possibles : audio, video, book, cheatsheet,...
		title: 'How to learn Python',
		link: 'https://courspython.com/introduction-python.html'
	}
]

const courses = [
	{
		id: 127,
		title: 'How to learn Agile with André',
		star: '4.7',
		category: 'Agile',
		mediasId: [2, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 84,
		title: 'The Basics of IOS dev',
		star: '4.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 74,
		title: 'The Basics of JS',
		star: '4.1',
		category: 'Javascript',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	},
	{
		id: 94,
		title: 'The Basics of IOS dev',
		star: '4.9',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 841,
		title: 'The Basics of IOS dev',
		star: '2.1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 811,
		title: 'The Basics of IOS dev',
		star: '5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	},
	{
		id: 89,
		title: 'The Basics of IOS dev',
		star: '4',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	},
	{
		id: 1,
		title: 'The Basics of IOS dev',
		star: '1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 12,
		title: 'The Basics of IOS dev',
		star: '4.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	},
	{
		id: 22,
		title: 'The Basics of IOS dev',
		star: '3.1',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 10,
		title: 'The Basics of IOS dev',
		star: '4.2',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	},
	{
		id: 14,
		title: 'The Basics of IOS dev',
		star: '1.6',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Skill' // type de parcours métier ou compétence
	},
	{
		id: 4,
		title: 'The Basics of IOS dev',
		star: '0.5',
		category: 'Swift',
		mediasId: [340, 7], // Ici on a que 2 médias pour le cours ci-dessus
		source: 'openlearning', // openlearning ou contributeur externe
		theme: 'Job' // type de parcours métier ou compétence
	}
]

const user = {
	id: 150, // id bidon pour répliquer le comportement d'une bdd nosql
	email: 'a@a.fr',
	password: '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', // aaaa
	firstname: 'Endray',
	lastname: 'De Sousa',
	myfavoritecoursesId: [127, 84],
	learnedmediasId: [7, 340, 2] // gestion de la progression (checkbox), medias terminés indépendamment d'un parcours de compétences ou métier
}

const defaulttab = true

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
		return res.json(courses)
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
	const allMedias = []
	const allTypesOfMedias = []
	const idsMedias = req.body
	idsMedias.forEach((id) => {
		medias.forEach((media) => {
			if (id == media.id) {
				allMedias.push(media)
				allTypesOfMedias.push(media.type)
			}
		})
	})
	return res.json({ allMedias, allTypesOfMedias })
})

module.exports = app
