import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Stagiaire from '../components/Stagiaire.vue'
import Entreprise from '../components/Entreprise.vue'
import Login from '../components/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/entreprise',
    name: 'Entreprise',
    component: Entreprise
  },
  {
    path: '/stagiaire',
    name: 'Stagiaire',
    component: Stagiaire
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
