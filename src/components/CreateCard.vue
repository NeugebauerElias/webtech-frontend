<template>
  <div>
    <form action="">
      <label for="front">Front:</label><br>
      <input v-model="frontInfo" id="front" type="text" minlength="1" required /><br>
      <label for="back">Back:</label><br>
      <input v-model="backInfo" id="back" type="text" minlength="1" required /><br><br>
      <button class="button button1" @click="createCard">Save</button>
      <button class="button button2" @click="refreshPage">Refresh</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateCard',
  props: ['id'],
  data () {
    return {
      frontInfo: '',
      backInfo: ''
    }
  },
  methods: {
    showAlert () {
      // Use sweetalert2
      this.$swal('You tried to create an empty Card ;)')
    },
    showSucces () {
      // Use sweetalert2
      this.$swal('Nice you added a new Card!')
    },
    createCard: function () {
      console.log(this.frontInfo)
      console.log(this.backInfo)

      if (this.frontInfo !== '' || this.backInfo !== '') {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/album/' + this.id + '/card/'

        const raw = JSON.stringify({
          frontInformation: this.frontInfo,
          backInformation: this.backInfo
        })

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))

        this.frontInfo = ''
        this.backInfo = ''
        this.showSucces()
      } else {
        this.showAlert()
      }
      // reload page after adding card
    },
    refreshPage () {
      window.location.reload()
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
  background: lightskyblue;
}
</style>
