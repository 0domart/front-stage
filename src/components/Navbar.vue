<template>
  <nav class="flex flex-col justify-evenly items-center text-2xl font-bold text-white">
      <router-link to="/">Home</router-link>
      <router-link to="/entreprise">Entreprise</router-link> 
      <router-link to="/stagiaire">Stagiaire</router-link>
      <router-link to="/register">Inscription</router-link>
      <router-link to="/login">Connexion</router-link>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>