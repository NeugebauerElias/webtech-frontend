<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ShowDog',
  data () {
    return {
      currentDogLink: ''
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://randomfox.ca', requestOptions)
      .then(response => response.text())
      .then(result => { this.currentDogLink = result })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
