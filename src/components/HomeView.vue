<template>
  <div>
    <h1> {{ msg2 }} </h1>
    <p> {{ msg }}</p>
    <joke-api/>
  </div>

</template>

<script>
import JokeApi from '@/components/JokeApi'
export default {
  components: {
    JokeApi
  },
  props: ['msg'],
  data () {
    return {
      msg2: 'Welcome to Indexcards. Add a deck and start adding cards to it. Lets get this "A+"'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
