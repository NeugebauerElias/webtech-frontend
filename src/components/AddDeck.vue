<template>
  <div class="header">
    <h1>Add a new Deck</h1>
  </div>
  <div>
    <input v-model="name" placeholder="DeckName" required>
    <br>
    <br>
    <button type="submit" @click="createAlbum()">Safe</button>
  </div>
</template>
<script>
export default {
  name: 'AddDeck',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    loadThings () {
    },
    createAlbum () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: this.name
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      this.name = ''
    },
    safe () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/'
      const data = {
        name: this.name
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
