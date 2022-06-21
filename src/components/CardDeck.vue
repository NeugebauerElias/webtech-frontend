<template>
  <div class="header">
<h1> {{ msg }}</h1>
  <a href="/">Add a Card to your Deck</a>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  data () {
    return {
      msg: 'Thats a Deck'
    }
  }
}
</script>

<style scoped>

</style>
