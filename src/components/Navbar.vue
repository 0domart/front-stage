<template>
  <nav class="flex flex-col justify-evenly items-center text-2xl font-bold text-white">
      <router-link class=""  to="/">Home</router-link>
      <router-link to="/entreprise">Entreprise</router-link> 
      <router-link to="/stagiaire">Stagiaire</router-link>
      <router-link to="/aide" v-show="connected">Aide</router-link>
      <router-link to="/register" v-show="!connected">Inscription</router-link>
      <router-link to="/login" v-show="!connected">Connexion</router-link>
      <router-link to="/login" @click="connected=false" v-show="connected">Deconnexion</router-link>
  </nav>
</template>


<script>
export default {
  name: "Navbar",

 data() {
    return {
      connected: false,
    };
  },
  created(){
    window.addEventListener('storage', (event) => {
      console.log('change');
      console.log(event);
      this.connected = true;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>