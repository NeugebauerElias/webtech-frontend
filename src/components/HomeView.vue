<template>
  <div>
    <h1> {{ msg2 }} </h1>
    <p> {{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
      msg2: 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
