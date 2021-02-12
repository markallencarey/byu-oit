const express = require('express')
const moviesCtrl = require('./moviesController')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/test', function (req, res) {
//   res.send('Test successful')
// })

// app.get('/testMovie', moviesCtrl.getTestMovie)
app.get('/movies', moviesCtrl.getTenMovies)

// app.get('/pokemon', moviesCtrl.getPokemon)

export default {
  path: '/api',
  handler: app
}