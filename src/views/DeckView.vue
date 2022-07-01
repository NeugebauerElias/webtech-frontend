<template>
  <h1>Decks</h1>
  <deck-list :decks="this.decks"></deck-list>
</template>

<script>
import DeckList from '@/components/DeckList'
export default {
  name: 'DeckView',
  components: {
    DeckList
  },
  data () {
    return {
      decks: []
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
      .then(result => result.forEach(deck => {
        this.decks.push(deck)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
