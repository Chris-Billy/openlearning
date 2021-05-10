// Simple Express Backend to manage API calls for Mongo Database

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const sha256 = require('js-sha256')
const cors = require('cors')
const app = express()
const secret = 'maelwalidchrisandre' // unique key for auth

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// for testing purposes / mock tests @todo @fixme
const user = {
	email: 'a@a.fr',
	password: '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', // aaaa
	firstname: 'Endray',
	lastname: 'De Sousa'
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
				email: user.email,
				firstname: user.firstname,
				lastname: user.lastname
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

// Me Route, provides userdata for vuex store, after nuxt auth login
app.get('/user', checkToken, (req, res) => {
	// Get token
	const token =
		req.headers.authorization && extractBearerToken(req.headers.authorization)
	// Decode token
	const decoded = jwt.decode(token, { complete: false })
	return res.json({ user: decoded })
})

module.exports = app
