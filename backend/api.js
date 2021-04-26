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
app.get('/user', (req, res) => {
  return res.json({ user: 'test' })
})

module.exports = app
