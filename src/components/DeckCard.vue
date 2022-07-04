import swal from 'sweetalert';
<template>
  <div class="deck">
    <div class="name">
      <router-link :to="{ name: 'CardList', params: {id: deck.albumId }}" class="routerDeck">
        {{ deck.name }}
      </router-link>
    </div>
    <div class="btn">
    <button class="deleteButton" @click="deleteDeck(deck.albumId)">❌</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DeckCard',
  props: {
    deck: {
      type: Object,
      required: true
    }
  },
  methods: {
    showSuccess () {
      // Use sweetalert2
      this.$swal('You deleted this Card!')
    },
    deleteDeck (deckId) {
      this.showSuccess()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/' + deckId
      const raw = JSON.stringify({
        deckId: this.deckId
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
    }
  }
}
</script>

<style scoped>
.deck {
  border: 1px solid;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-color: white;
}
.name {
  font-weight: 500;
  font-size: 24px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #773bc4;
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
</style>
