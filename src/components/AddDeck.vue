<template>
  <div class="header">
    <h1>Add a new Deck</h1>
  </div>
  <div>
    <input v-model="frontInformation" placeholder="Vorderseite">
    <input v-model="backInformation" placeholder="Rückseite">
  </div>
</template>
<script>
export default {
  name: 'FlashCard',
  props: ['title'],
  data () {
    return {
      flashCards: [],
      frontInformation: '',
      backInformation: ''
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(card => {
        this.items.push(card)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
