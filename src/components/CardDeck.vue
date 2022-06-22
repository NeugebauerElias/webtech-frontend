<template>
  <div class="header">
  <h1> Deck: {{ title }}</h1>
    <p>
      Here is an example of a Deck.
      It shows all cards or one by one.<br>
      And then there is the function to add a new Card, which ist automatically added to the album the user is in.
    </p>
    <a href="/addCard">add a Card</a>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  props: ['title'],
  data () {
    return {
      flashCards: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(card => {
        this.flashCards.push(card)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>

</style>
