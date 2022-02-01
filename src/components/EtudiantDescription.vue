<template>
  <div
    class="
      p-10
      h-full
      flex flex-col
      items-center
      space-y-20
    "
  >
    <h1 class="text-3xl font-bold">Informations concernant l'étudiant</h1>

<form>
  <div class="bg-gray-100 border-2 border-gray-900 rounded-xl flex space-x-10 p-10">
      <div class="flex flex-col space-y-5">
        <label class="p-3 flex-grow text-left" for="nomEtudiant">Nom</label>
        <label class=" p-3 flex-grow text-left" for="prenomEtudiant">Prénom</label>
        <label class=" p-3 flex-grow text-left" for="login">Nom d'utilisateur</label>
        <label class=" p-3 flex-grow text-left" for="password">Mot de passe</label>
        <label class=" p-3 flex-grow text-left" for="dateObtention">Date d'obtention du BTS (JJ-MM-AAAA)</label>
        <label class=" p-3 flex-grow text-left" for="classe">Classe</label>
      </div>


<div class="flex flex-col space-y-5">
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="nomEtudiant"
          v-model="this.etudiant.nomEtudiant"
          placeholder="Entrez un nom"
        />

        
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="prenomEtudiant"
          v-model="this.etudiant.prenomEtudiant"
          placeholder="Entrez un prénom"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="login"
          v-model="this.etudiant.login"
          placeholder="Entrez un login"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="password"
          id="password"
          v-model="this.etudiant.mdp"
          placeholder="Entrez un mot de passe"
        />


        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="date"
          id="dateObtention"
          v-model="this.etudiant.anneeObtention"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="classe"
          v-model="this.etudiant.numClasse"
          placeholder="Entrez un numéro de classe"
        />
</div>
  </div>
  <input class="py-3 px-16 rounded-full m-5 font-bold cursor-pointer bg-gray-100 border-2 border-gray-900 hover:border-4 hover:text-white hover:bg-gray-900 duration-200 ease-in-out focus:ring-2" type="submit" value="Ajouter">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EtudiantDescription",

  data() {
    return {
      etudiant: [],
    };
  },

  created() {
    this.getEtudiant();
  },

  methods: {
    async getEtudiant() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(
          "http://localhost:8080/stage/etudiant/" + id
        );
        console.log(response.data);
        this.etudiant = response.data;
        console.log(this.etudiant);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>