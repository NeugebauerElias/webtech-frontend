<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddDeck msg="Hello World!"/>
    <FlashCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddDeck from '@/components/AddDeck.vue'
import FlashCard from '@/components/FlashCard'

export default {
  name: 'HomeView',
  components: {
    AddDeck,
    FlashCard
  }
}
</script>
