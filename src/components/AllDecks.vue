<template>
  <div class="header">
    <h1> Start learning </h1>
  </div>
  <div class="deck-container">
     <div v-for="deck in decks" :key="deck.albumId">
       <div class="deck">
         <div class="name">
           <router-link :to="{ name: 'CardList', params: {id: deck.albumId }}">
             {{ deck.name }}
           </router-link>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'AllDecks',
  data () {
    return {
      decks: []
    }
  },
  mounted () {
    console.log('StinckiRYZEOP')
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

a{
  color: black;
  text-decoration: none;
  padding: 30px 30px;
  border-radius: 10px;
  border-color: black;
}
.deck-container {
  display: flex;
  flex-wrap: wrap;
}

.deck {
  border: solid 1px;
  border-radius: 5px;
  height: 150px;
  width: 200px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deck {
  background: orange;
}
.deck:hover {
  background: orangered;
}
</style>
