<template>
  <router-link :to="{ name: 'CardList', params: {id: deck.albumId }}">
    {{ deck.name }}
  </router-link>
</template>

<script>
export default {
  name: 'DeckCard',
  props: {
    deck: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
