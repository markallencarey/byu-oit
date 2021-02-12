<template>
  <div class="container">
    <h1>Our Movies, Your Way</h1>
    <Movie :movies='movies'/>
  </div>
</template>

<script>
import Movie from '@/Components/Movie'
export default {
  components: {
    Movie
  },
  data() {
    return {
      movies: []
    }
  },
  async asyncData({$axios}) {
    let {data} = await $axios.get('/api/movies')
    return {movies: data }
  },
  methods: {
    async getMovies() {
      let res = await this.$store.dispatch('getMovies')
      this.movies = res.data
      console.log(this.movies)
    }
  },
  mounted() {
    // console.log('helloworld')
    this.getMovies()
  }
}
</script>


