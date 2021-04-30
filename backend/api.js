// Simple Express Backend to manage API calls for Mongo Database

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const User = require('./models/user.js')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))

// Get Route for demo only
app.get('/users/', (req, res) => {
  // Appels Mongo via Mongoose
  // TODO ...
  // ex de data à renvoyer :
  const users = [
    {
      id: 1,
      name: 'Walid',
    },
    {
      id: 2,
      name: 'MaëLLE',
    },
    {
      id: 3,
      name: 'Chris',
    },
    {
      id: 4,
      name: 'Endray',
    },
  ]
  return res.json(users)
})

module.exports = app
