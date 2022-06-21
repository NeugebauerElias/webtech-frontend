<template>
  <div class="header">
    <h1>Add a new Card</h1>
  </div>
  <form class="information">
  <div>
    <input v-model="frontInformation" placeholder="Vorderseite">
    <input v-model="backInformation" placeholder="Rückseite">
    <br>
    <select name="cars" id="cars">
      <option v-for="deck in flashCards" :key="deck.id">{{ deck.name }} </option>
    </select>
    <br>
    <button class="button button1" type="submit" @click.prevent="createCard()">Safe</button>
    <button class="button button2" type="reset">Clear</button>
  </div>
  </form>
</template>
<script>
export default {
  name: 'AddCard',
  data () {
    return {
      frontInformation: '',
      backInformation: '',
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
        this.flashCards.push(card)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    loadThings () {
    },
    createCard () {
      console.log(this.frontInformation)
      console.log(this.backInformation)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/' + '/card/'

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        frontInformation: this.frontInformation,
        backInformation: this.backInformation
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    },
    safe () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/1/card'
      const data = {
        front: this.frontInformation,
        back: this.backInformation
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
    }
  }
}
</script>

<style scoped>
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
.button1{
  background-color: #4CAF50;
}
.button2 {
  background: red;
}
</style>
