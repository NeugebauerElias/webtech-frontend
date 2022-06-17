<template>
  <h1>This is a flashcard</h1>
</template>

<script>
export default {
  name: 'FlashCard',
  data () {
    return {
      flashCards: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/album', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style>

</style>
