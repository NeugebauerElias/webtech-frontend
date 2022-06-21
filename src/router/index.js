import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HomeView.vue'
import AddDeck from '@/components/AddDeck.vue'
import AddCard from '@/components/AddCard.vue'
import AllDecks from '@/components/AllDecks.vue'
import CardDeck from '@/components/CardDeck.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/decks',
    name: 'decks',
    component: AllDecks
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
