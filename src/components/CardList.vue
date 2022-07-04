<template>
  <h1>Cards in {{ deck.name }} </h1>
  <create-card v-bind:id="id"></create-card>
  <div class="container">
    <div class="card" v-for="card in deck.cards" :key="card.id">
      <div class="btn">
        <button class="deleteButton" @click.prevent="deleteCard(card.id)">❌</button>
      </div>
      <div class="cardInfo">
        <vue-flip active-click="" width="200px" height="1500px">
          <template v-slot:front>
            Front: <br>
            <span class="info">{{ card.frontInformation }}</span>
          </template>
          <template v-slot:back>
            Back: <br>
            <span class="info"> {{ card.backInformation }}</span>
          </template>
        </vue-flip>
      </div>
    </div>
   </div>
  {{ deck.cards }}
</template>

<script>
import VueFlip from 'vue-flip' // imported npm module
import CreateCard from '@/components/CreateCard'
export default {
  components: {
    'vue-flip': VueFlip,
    CreateCard
  },
  name: 'CardList',
  props: ['id'],
  data () {
    return {
      deck: '',
      cardId: '',
      dogLink: ''
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
      // reload the page to make delete visible
    },
    refreshPage () {
      window.location.reload()
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
  height: 150px;
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
  border: 0;
  background-color: white;
  border-radius: 4px;
}
.deleteButton:hover {
  background-color: #3f49c4;
}
.cardInfo {
  margin: auto;
  text-align: center;
}
.info {
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
