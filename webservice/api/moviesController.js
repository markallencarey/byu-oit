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
      let movieList = []
      if (movies.length > 10) {
        for (let i = 0; i < 10; i++) {
          let movie = {
            movie_id: movies[i].id,
            title: movies[i].title,
            poster_image_url: `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}&/t/p/w500${movies[i].poster_path}`,
            popularity_summary: `${movies[i].popularity} out of ${movies[i].vote_count}`
          }
          movieList.push(movie)
        }
      }
      // console.log(movieList.length)
      res.status(200).send(movieList)
    }).catch(err => console.log(err))
  },

  getPokemon: (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then(axRes => {
      res.status(200).send(axRes.data)
    }).catch(err => console.log(err))
  }
}