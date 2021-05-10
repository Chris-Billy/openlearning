const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.post('/signup', (req, res) => {
  const { email } = req.body

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      },
    ],
  }

  const postData = JSON.stringify(data)

  fetch('https://us1.api.mailchimp.com/3.0/lists/a48a76381c', {
    method: 'POST',
    headers: {
      Authorization: 'auth f46a243712b4c579be06f5dae28a989e-us1',
    },
    body: postData,
  })
    .then(
      res.statusCode === 200
        ? res.redirect('/success.html')
        : res.redirect('/fail.html')
    )
    .catch((err) => console.log(err))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Site ouvert sur : localhost:${PORT}`))
