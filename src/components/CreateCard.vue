<template>
  <div>
    <form action="">
      <label for="front">Front:</label><br>
      <input v-model="frontInfo" id="front" type="text" required /><br>
      <label for="back">Back:</label><br>
      <input v-model="backInfo" id="back" required /><br><br>
      <button @click="createCard">Save</button>
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
    createCard: function () {
      console.log(this.frontInfo)
      console.log(this.backInfo)

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
      // reload page after adding card
      location.reload()
    }
  }
}
</script>

<style scoped>

</style>
