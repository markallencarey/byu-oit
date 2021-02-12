import { getTenMovies } from "../api/moviesController";

export const actions = {
  async getMovies() {
    let res = await this.$axios.get('/api/movies')
    return res
  }
}