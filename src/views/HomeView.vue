<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddDeck msg="Hello World!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddDeck from '@/components/AddDeck.vue'

export default {
  name: 'HomeView',
  components: {
    AddDeck
  }
}
</script>
