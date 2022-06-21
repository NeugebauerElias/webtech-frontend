import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CardDeck from '@/components/CardDeck.vue'
import AddDeck from '@/components/AddDeck.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/decks',
    name: 'deck',
    component: CardDeck
  },
  {
    path: '/add',
    name: 'add',
    component: AddDeck
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
