<template>
  <div class="header">
  <h1> Deck: {{ msg }}</h1>
  <a href="/home">Add a Card to your Deck</a>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  data () {
    return {
      msg: 'XY'
    }
  }
}
</script>

<style scoped>

</style>
