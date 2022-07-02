<template>
  <div class="deck">
    <div class="name">
      <router-link :to="{ name: 'CardList', params: {id: deck.albumId }}">
        {{ deck.name }}
        {{ deck }}
      </router-link>
    </div>
  </div>
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
.deck {
  border: 1px solid;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  font-weight: 500;
  font-size: 24px;
}

a {
  text-decoration: none;
  color: #195190FF;
}

a:hover {
  color: #773bc4;
}
</style>
