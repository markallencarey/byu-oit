const axios = require('axios')

module.exports = {
  getAllMovies: (req, res) => {
    axios.get().then(res => {
      res.status(200).send(res.data)
    }).catch(err => console.log(err))
  }
}