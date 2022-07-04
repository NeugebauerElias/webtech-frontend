<template>
  <h1>A Joke</h1>
  <p>{{ joke.value }}</p>
</template>

<script>
export default {
  name: 'JokeApi',
  data () {
    return {
      joke: []
    }
  },
  mounted () {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
      }
    }

    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
      .then(response => response.json())
      .then(response => { this.joke = response })
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>

</style>
