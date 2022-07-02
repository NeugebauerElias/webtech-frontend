<template>
  <div class="decks">
    <div v-for="deck in decks" :key="deck.id">
      <deck-card :deck="deck"></deck-card>
    </div>
  </div>
</template>

<script>
import DeckCard from '@/components/DeckCard'
export default {
  components: {
    DeckCard
  },
  name: 'DeckList',
  component: {},
  props: {
    decks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.decks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
