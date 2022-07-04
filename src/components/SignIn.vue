<template>
  <h1>Sign In</h1>
  <p><input type ="text" placeholder="Email" v-model="email"></p>
  <p><input type ="password" placeholder="Password" v-model="password"></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register()">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  <p></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const errMsg = ref() // ErrorMessage
const router = useRouter()

const register = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully signed')
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid Email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect Password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      router.push('/')
    })
    .catch((error) => {
      alert(error.message)
    })
}

</script>

<script>
export default {
  methods: {
    showSuccess () {
      // Use sweetalert2
      this.$swal('You signed In!')
    }
  }
}
</script>

<style scoped>

</style>
