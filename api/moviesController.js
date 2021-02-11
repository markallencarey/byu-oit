require('dotenv').config()
const axios = require('axios')

const { API_KEY } = process.env
// const { title } = 
const title = 'star'

module.exports = {
  getTestMovie: (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/2?api_key=${API_KEY}&language=en-US`).then(axRes => {
      res.status(200).send(axRes.data)
    }).catch(err => console.log(err))
  },

  getTenMovies: (req, res) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&include_adult=false&region=US`).then(axRes => {
      let movies = axRes.data.results
      console.log(movies)
      // if (axRes.data.results.length > 10) {

      // }
      res.status(200).send(movies)
    }).catch(err => console.log(err))
  },

  getPokemon: (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then(axRes => {
      res.status(200).send(axRes.data)
    }).catch(err => console.log(err))
  }
}