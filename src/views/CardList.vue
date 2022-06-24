<template>
  <h1>A list of cards </h1>
  <div v-for="card in deck" :key="card">
    <p> {{ card }}</p>
  </div>
  <p> {{ deck }}</p>
</template>

<script>
export default {
  name: 'CardList',
  props: ['id'],
  data () {
    return {
      deck: null
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

</style>
