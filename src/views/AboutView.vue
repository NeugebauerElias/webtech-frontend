<template>
  <div class="about">
    <CardDeck msg="Hello World!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardDeck from '@/components/CardDeck'

export default {
  name: 'AboutView',
  components: {
    CardDeck
  }
}
</script>
