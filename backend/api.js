// Simple Express Backend to manage API calls for Mongo Database

const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))

// Get Route for demo only
app.get('/users', (req, res) => {
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
  ]
  return res.json(users)
})

module.exports = app
