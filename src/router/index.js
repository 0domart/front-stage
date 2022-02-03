import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Stagiaire from '../components/Stagiaire.vue'
import EtudiantDescription from '../components/EtudiantDescription.vue'
import CreerEtudiant from '../components/CreerEtudiant.vue'
import Entreprise from '../components/Entreprise.vue'
import EntrepriseDescription from '../components/EntrepriseDescription.vue'
import EntrepriseModification from '../components/EntrepriseModification.vue'
import Aide from '../components/Aide.vue'
import Login from '../components/Login.vue'
import Inscription from '../components/Inscription.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/entreprise',
    name: 'Entreprise',
    component: Entreprise,
    meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: '/entreprise-modification/:id',
    name: 'EntrepriseModification',
    component: EntrepriseModification,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/entreprise/:id',
    name: 'EntrepriseDescription',
    component: EntrepriseDescription,
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
    },
    props: true
  },
  {
    path: '/etudiant/:id',
    name: 'EtudiantDescription',
    component: EtudiantDescription,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/creerEtudiant',
    name: 'CreerEtudiant',
    component: CreerEtudiant,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Inscription',
    component: Inscription,
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
