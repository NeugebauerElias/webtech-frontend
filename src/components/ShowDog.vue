<template>
  <div>
    {{ currentDogLink }}
  </div>
</template>

<script>
export default {
  name: 'ShowDog',
  data () {
    return {
      currentDogLink: 'https://place.dog/300/200'
    }
  }
}
</script>

<style scoped>

</style>
