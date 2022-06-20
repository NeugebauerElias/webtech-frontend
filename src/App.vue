<template>
  <HomeView/>
  <AboutView/>
</template>

<script>
// import HeaderSection from './components/HeaderSection'
// import AddDeck from '@/components/AddDeck'
// import AddCard from '@/components/AddCard'
import HomeView from '@/views/HomeView'

export default {
  name: 'App',
  components: {
    HomeView
    // AddDeck,
    // AddCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
