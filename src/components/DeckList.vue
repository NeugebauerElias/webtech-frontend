import swal from 'sweetalert';
<template>
  <div>
    <h1>Add a new Deck</h1>
    <input v-model="name" placeholder="DeckName" required>
    <br>
    <button type="submit" @click="createAlbum()">Safe</button>
  </div>
  <button class="button button2" @click="refreshPage">Refresh</button>
  <div class="decks">
    <div v-for="deck in decks" :key="deck.id">
      <deck-card :deck="deck" class="deckId"></deck-card>
    </div>
  </div>
</template>

<script>
import DeckCard from '@/components/DeckCard'
export default {
  components: {
    DeckCard
  },
  name: 'DeckList',
  data () {
    return {
      name: ''
    }
  },
  component: {},
  props: {
    decks: {
      type: Array,
      required: true
    }
  },
  methods: {
    refreshPage () {
      window.location.reload()
    },
    showAlert () {
      // Use sweetalert2
      this.$swal('Please add a name to the Deck')
    },
    showSuccess () {
      // Use sweetalert2
      this.$swal('Nice you added a new Deck!')
    },
    showLength () {
      // Use sweetalert2
      this.$swal('The name cant be longer than 14!')
    },
    createAlbum () {
      if (this.name !== '') {
        if (this.name.length < 14) {
          const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/'
          const myHeaders = new Headers()
          myHeaders.append('Content-Type', 'application/json')

          const raw = JSON.stringify({
            name: this.name,
            $swal: this.$swal
          })

          const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          }

          fetch(endpoint, requestOptions)
            .catch(error => console.log('error', error))

          this.name = ''
          this.showSuccess()
        } else {
          this.showLength()
        }
      } else {
        this.showAlert()
      }
    }
  }
}

</script>

<style scoped>
.decks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

 .button {
   border: none;
   color: white;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   margin: 10px 2px;
   cursor: pointer;
 }
.button2 {
  background: lightskyblue;
}
</style>
