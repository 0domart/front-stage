import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Stagiaire from '../components/Stagiaire.vue'
import Entreprise from '../components/Entreprise.vue'
import Aide from '../components/Aide.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/entreprise',
    name: 'Entreprise',
    component: Entreprise,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aide',
    name: 'Aide',
    component: Aide,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/stagiaire',
    name: 'Stagiaire',
    component: Stagiaire,
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('statut') == null || localStorage.getItem('statut') == undefined) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } 
    else {
      next();
    }
  }
  else {
    next();
  }
})

export default router
