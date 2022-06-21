<template>
  <div class="header">
    <h1> Deck: {{ title }}</h1>
    <p>
      Here are decks shown, propably with the name in it.
    </p>
  </div>
  <div class="nav">
    <li><a href="/deck"> Deck1 </a></li>
    <li><a href="/deck"> Deck2 </a></li>
    <li><a href="/deck"> Deck3 </a></li>
  </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: ['title'],
  data () {
    return {
      flashCards: []
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
 li{
   padding: 20px;
   border-color: #2c3e50;
   text-align: center;
 }
</style>
