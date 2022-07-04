<template>
  <app-header></app-header>
  <nav>
    <ul>
      <li><router-link to="/add" exact>Add a Deck</router-link></li>
      <li><router-link to="/addCard" exact>Add a Card</router-link></li>
      <li><router-link to="/deck-view" exact>Decks</router-link></li>
      <li><router-link to="/register" exact>Register</router-link></li>
      <li><router-link to="/sign-in" exact>SignIn</router-link></li>
      <li><button @click="handlesSignOut" v-if="isLoggedIn">SignOut</button></li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router'

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handlesSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin-right: 40px;
  }
  li{
    display: inline-block;
    padding: 10px 10px;
  }
  li:hover{
    background: #eee;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 15px 15px;
    border-radius: 10px;
  }
  a:hover{
    color: green;
  }
  nav{
    background: #444;
    margin-bottom: 40px;
  }
</style>
