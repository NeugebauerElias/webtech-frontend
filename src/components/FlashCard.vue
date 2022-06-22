<template>
  <h1>This is a flashcard</h1>
  <div v-for="card in flashCards" :key="card">
  </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: ['albumId'],
  data () {
    return {
      flashCards: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'album/' + this.albumId
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style>

</style>
