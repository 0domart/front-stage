<template>
<main class="flex w-full justify-between">
  <Navbar class="bg-gray-800 text-white w-96 h-screen"/>
  <Stagiaire class="bg-yellow-900 flex items-center"/>
</main>
</template>

<script>
import './assets/tailwind.css';
import Navbar from './components/Navbar.vue'
import Stagiaire from './components/Stagiaire.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Stagiaire
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
