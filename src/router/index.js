import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HomeView.vue'
import AddDeck from '@/components/AddDeck.vue'
import AddCard from '@/components/AddCard.vue'
import CardDeck from '@/components/CardDeck.vue'
import FlashCard from '@/components/FlashCard'
import CardList from '@/components/CardList'
import DeckView from '@/views/DeckView'
import UserRegister from '@/components/UserRegister'
import SignIn from '@/components/SignIn'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: AddDeck
    },
    {
      path: '/addCard',
      name: 'addCard',
      component: AddCard
    },
    {
      path: '/deck',
      name: 'deck',
      component: CardDeck
    },
    {
      path: '/card',
      name: 'Card',
      component: FlashCard
    },
    {
      path: '/card/:id',
      name: 'CardList',
      component: CardList,
      props: true
    },
    {
      path: '/deck-view',
      name: 'DeckView',
      component: DeckView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }
  ]
}
)
/*
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('you dont have access!')
      next('/')
    }
  }
})
*/
export default router
