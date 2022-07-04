import swal from 'sweetalert';
<template>
  <div class="header">
    <h1>Add a new Deck</h1>
  </div>
  <div>
    <input v-model="name" placeholder="DeckName" required>
    <br>
    <button type="submit" @click="createAlbum()">Safe</button>
  </div>
</template>
<script>
export default {
  name: 'AddDeck',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    loadThings () {
    },
    showAlert () {
      // Use sweetalert2
      this.$swal('Please add a name to the Deck')
    },
    showSucces () {
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
          this.showSucces()
        } else {
          this.showLength()
        }
      } else {
        this.showAlert()
      }
    },
    safe () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/'
      const data = {
        name: this.name
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error))
      this.name = ''
    }
  }
}
</script>

<style scoped>
</style>
