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
        <label class=" p-3 flex-grow text-left" for="dateObtention">Date d'obtention du BTS (JJ-MM-AAAA)</label>
        <label class=" p-3 flex-grow text-left" for="classe">Classe</label>
      </div>


<div class="flex flex-col space-y-5">
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400"
          type="text"
          id="nomEtudiant"
          disabled
          v-model="this.etudiant.nomEtudiant"
          placeholder="Entrez un nom"
        />

        
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400"
          type="text"
          id="prenomEtudiant"
          disabled
          v-model="this.etudiant.prenomEtudiant"
          placeholder="Entrez un prénom"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="login"
          disabled
          v-model="this.etudiant.login"
          placeholder="Entrez un login"
        />

        <p
          class=" p-3 flex-grow rounded border-2 border-gray-400"
        >{{this.etudiant.anneeObtention}}</p>

        <p
          class=" p-3 flex-grow rounded border-2 border-gray-400"
        >{{this.etudiant.numClasse}}</p>
</div>
  </div>
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