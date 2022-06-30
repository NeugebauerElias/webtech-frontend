<template>
  <h1>A list of cards </h1>
  <div class="container">
    <div class="card" v-for="card in deck.cards" :key="card.id">
      <div v-if="!isBack" @click="toggleCard">
        <p> Front: {{ card.frontInformation }} </p>
      </div>
      <div v-if="isBack" @click="toggleCard">
        <p> Back: {{ card.backInformation }} </p>
      </div>
      <button class="deleteButton" @click="deleteCard(card.id)">Delete</button>
    </div>
  </div>
  <div>
    <h1>Delete a Card</h1>
  <input v-model="cardId" placeholder="ID">
  <br>
  <button type="submit" @click="deleteCard">Delete</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'CardList',
  props: ['id'],
  data () {
    return {
      deck: '',
      cardId: '',
      isBack: false
    }
  },
  methods: {
    toggleCard: function () {
      this.isBack = !this.isBack
    },
    deleteCard (cardId) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/cards/' + cardId
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
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    border: 1px solid;
    border-radius: 4px;
    width: 200px;
    height: 200px;
    margin: 20px;
  }

  .deleteButton {
    margin: 4px;
  }
</style>
