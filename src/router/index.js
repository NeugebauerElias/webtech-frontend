import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CardDeck from '@/components/CardDeck.vue'
import AddDeck from '@/components/AddDeck.vue'
import AddCard from '@/components/AddCard.vue'

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
  },
  {
    path: '/addCard',
    name: 'addCard',
    component: AddCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
