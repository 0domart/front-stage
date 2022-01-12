<template>
  <Navbar class="fixed h-full w-1/5 top-0 left-0 bg-gray-800 text-white"/>
    <router-view class="absolute w-4/5 top-0 right-0"/>
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
