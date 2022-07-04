import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HomeView.vue'
import FlashCard from '@/components/FlashCard'
import CardList from '@/components/CardList'
import DeckView from '@/views/DeckView'
import UserRegister from '@/components/UserRegister'
import SignIn from '@/components/SignIn'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/card',
      name: 'Card',
      component: FlashCard,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/card/:id',
      name: 'CardList',
      component: CardList,
      props: true,
      meta: {
        requiresAuth: false
      }
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
      component: UserRegister,
      meta: {
        requiresAuth: false
      }
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
      next('/sign-in')
    }
  }
})
*/
export default router
