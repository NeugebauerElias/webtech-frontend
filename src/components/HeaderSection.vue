<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <a href="/#/cardDeck">Go To Albums</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  data () {
    return {
      msg: 'Add a Deck'
    }
  }
}
</script>

<style scoped>

</style>
