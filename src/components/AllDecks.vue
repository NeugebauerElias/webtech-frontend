<template>
  <div class="header">
    <h1> Deck: {{ title }}</h1>
    <p>
      Here are decks shown, propably with the name in it.
    </p>
  </div>
  <div class="nav">
    <ul>
     <div v-for="deck in decks" :key="deck.albumId">
       <router-link :to="{ name: 'CardList', params: {id: deck.albumId }}">
         <li > {{ deck.name }} </li>
       </router-link>
     </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: ['title'],
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
      .then(result => result.forEach(card => {
        this.decks.push(card)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin-right: 40px;
}
li{
  display: inline-block;
  padding: 10px 10px;
  background: orange;
  margin: 5px;
  border-radius: 8px;
}
li:hover{
  background: orangered;
}
a{
  color: black;
  text-decoration: none;
  padding: 30px 30px;
  border-radius: 10px;
  border-color: black;
}
</style>
