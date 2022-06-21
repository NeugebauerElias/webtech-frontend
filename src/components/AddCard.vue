<template>
  <div class="header">
    <h1>Add a new Card</h1>
  </div>
  <div>
    <input v-model="frontInformation" placeholder="Vorderseite">
    <input v-model="backInformation" placeholder="Rückseite">
    <br>
    <br>
    <button type="button" @click="safe()">Safe</button>
  </div>
</template>
<script>
export default {
  name: 'AddCard',
  props: ['title'],
  data () {
    return {
      flashCards: [],
      frontInformation: '',
      backInformation: ''
    }
  },
  methods: {
    loadThings () {
    },
    safe () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/1/card'
      const data = {
        front: this.frontInformation,
        back: this.backInformation
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
</style>
