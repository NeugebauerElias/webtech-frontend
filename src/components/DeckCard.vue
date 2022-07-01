<template>
  <p> {{ deck.name }}</p>
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
