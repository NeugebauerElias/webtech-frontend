<template>
  <h1>A list of cards </h1>
  <div>
    <h1>Delete a Card</h1>
  <input v-model="cardId" placeholder="ID">
  <br>
  <button type="submit" @click="deleteCard">Delete</button>
  </div>
  <div v-for="card in deck" :key="card">
    <p> {{ card }}</p>
  </div>
  <p> {{ deck }}</p>
</template>

<script>
export default {
  name: 'CardList',
  props: ['id'],
  data () {
    return {
      deck: null,
      cardId: ''
    }
  },
  methods: {
    deleteCard () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/cards/' + this.cardId
      const raw = JSON.stringify({
        cardId: this.cardId
      })

      const requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    turnIntoJson () {
      this.deck = JSON.stringify(this.deck)
      this.deck = JSON.parse(this.deck)
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/' + this.id
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => { this.deck = result })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
