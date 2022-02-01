<template>
  <nav class="flex flex-col justify-evenly text-2xl font-bold text-white">
      <router-link class="p-10 hover:bg-gray-600 transition"  to="/">Accueil</router-link>
      <router-link class="p-10 hover:bg-gray-600 transition" to="/entreprise">Entreprise</router-link> 
      <router-link class="p-10 hover:bg-gray-600 transition" to="/stagiaire">Stagiaire</router-link>
      <router-link class="p-10 hover:bg-gray-600 transition" to="/aide" v-show="connected">Aide</router-link>
      <router-link class="p-10 hover:bg-gray-600 transition" to="/register" v-show="connected">Inscription</router-link>
      <router-link class="p-10 hover:bg-gray-600 transition" to="/login" v-show="!connected">Connexion</router-link>
      <router-link class="p-10 hover:bg-gray-600 transition" to="/login" @click="hh" v-show="connected">Deconnexion</router-link>
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
  methods:{
    hh(){
      localStorage.clear();
      window.dispatchEvent(new CustomEvent('oh', {
        detail: {
          storage: ""
        }
      }));
    }
  },
  created(){
    if(localStorage.statut == "etudiant" || localStorage.statut == "professeur"){
        this.connected = true;
      }
      else {
        this.connected = false;
      }
    window.addEventListener('oh', (event) => {
      console.log('change');
      console.log(event);
      if(event.detail.storage == "etudiant" || event.detail.storage == "professeur"){
        this.connected = true;
      }
      else {
        this.connected = false;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>