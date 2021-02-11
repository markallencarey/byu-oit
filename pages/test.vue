<template>
  <button @click='showMessageFromBackEnd'>Show message from backend</button>
</template>

<script>
export default {
  methods: {
    async showMessageFromBackEnd() {
      try {
        const res = await this.$axios.get('/api/test')
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>