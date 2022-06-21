<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
  <form action="">
    <label for="title">Title:</label><br><br>
    <input type="text" id="" name="title"><br><br>
    <input type="submit" value="Add">
  </form>
</template>

<script>
export default {
  name: 'AddDeck',
  data () {
    return {
      msg: 'Add a Deck'
    }
  }
}
</script>

<style scoped>

</style>
