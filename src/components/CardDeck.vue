<template>
  <div class="header">
  <h1> Deck: {{ title }}</h1>
    <a href="/addCard">add a Card</a>
  </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: ['title'],
  data () {
    return {
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
        this.items.push(card)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>

</style>
