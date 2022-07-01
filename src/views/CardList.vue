<template>
  <h1>Cards in {{ deck.name }} </h1>
  <div class="container">
    <div class="card" v-for="card in deck.cards" :key="card.id">
      <div class="btn">
        <button class="deleteButton" @click="deleteCard(card.id)">❌</button>
      </div>
      <div class="cardInfo">
        <vue-flip active-click="" width="200px" height="200px">
          <template v-slot:front>
            Front:
            {{ card.frontInformation }}
          </template>
          <template v-slot:back>
            Back: {{ card.backInformation }}
          </template>
        </vue-flip>
      </div>
    </div>
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

      this.deck.cards.splice(cardId, 1)
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
  .deleteButton {
    margin: 4px;
  }
  .cardInfo {
    margin: auto;
  }
</style>
