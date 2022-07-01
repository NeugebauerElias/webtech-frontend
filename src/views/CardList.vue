<template>
  <h1>A list of cards </h1>
  <div class="container">
    <div class="card" v-for="card in deck.cards" :key="card.id">
      <div class="btn">
        <button class="deleteButton" @click="deleteCard(card.id)">Delete</button>
      </div>
      <vue-flip active-click="">
        <template v-slot:front>
          {{ card.frontInformation }}
        </template>
        <template v-slot:back>
          {{ card.backInformation }}
        </template>
      </vue-flip>
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
import VueFlip from 'vue-flip'
export default {
  components: {
    'vue-flip': VueFlip
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
    toggleCard: function (cardId) {
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
    display: flex;
    flex-direction: column;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
  }

  .cardInformation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .deleteButton {
    margin: 4px;
  }
</style>
