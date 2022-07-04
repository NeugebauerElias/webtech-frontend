import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTGZBbYeGs-R0emLWHb2JkxB8elZBn_8U',
  authDomain: 'webtechfire.firebaseapp.com',
  projectId: 'webtechfire',
  storageBucket: 'webtechfire.appspot.com',
  messagingSenderId: '657635122702',
  appId: '1:657635122702:web:1cc2dae3e4357551b0265f'
}

initializeApp(firebaseConfig)

createApp(App).use(router).use(VueSweetalert2).mount('#app')
