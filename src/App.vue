<template>
  <main class="flex w-full justify-between">
    <Navbar class="bg-gray-800 text-white w-1/5 h-screen"/>
    <router-view class="flex w-4/5 items-center"/>
  </main>
</template>

<script>
import './assets/tailwind.css';
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
