<template>
  <div>
    <div v-for="movie in movies" :key='movie.movie_id'>
      <img :src='movie.poster_image_url'/>
      <h1>{{movie.title}}</h1>
      <p>Popularity: {{movie.popularity_summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array
  },
}
</script>

<style scoped>
  .movie-poster {
    
  }
</style>