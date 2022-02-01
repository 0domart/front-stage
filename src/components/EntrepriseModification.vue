<template>
  <div
    class="
      bg-yellow-400
      p-10
      h-full
      flex flex-col
      items-center
      space-y-20
    "
  >
    <h1 class="text-3xl font-bold">Modification de l'entreprise</h1>

    <form class="bg-gray-100 border-2 border-gray-900 rounded-xl flex space-x-10 p-10">
      <div class="flex flex-col space-y-5">
        <label class="p-3 flex-grow text-left" for="nomEntreprise">Nom de l'entreprise</label>
        <label class=" p-3 flex-grow text-left" for="nomContact">Nom du contact</label>
        <label class=" p-3 flex-grow text-left" for="resp">Nom du responsable</label>
        <label class=" p-3 flex-grow text-left" for="rue">Rue</label>
        <label class=" p-3 flex-grow text-left" for="codePostal">Code postal</label>
        <label class=" p-3 flex-grow text-left" for="ville">Ville</label>
        
        <label class="p-3 flex-grow text-left" for="tel">Téléphone</label>
        <label class=" p-3 flex-grow text-left" for="fax">Fax</label>
        <label class=" p-3 flex-grow text-left" for="email">Email</label>
        <label class=" p-3 flex-grow text-left" for="observation">Observation</label>
        <label class=" p-3 flex-grow text-left" for="url">url</label>
        <label class=" p-3 flex-grow text-left" for="niveau">Niveau</label>
        <label class=" p-3 flex-grow text-left" for="spec">Specialité</label>
      </div>


<div class="flex flex-col space-y-5">
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="nomEtudiant"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />

        
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="prenomEtudiant"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="login"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="password"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />


        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="date"
          id="dateObtention"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="classe"
          v-model="nomEtudiant"
          placeholder="{{etudiant.nomEtudiant}}"
        />
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
      nomEtudiant: "",
      prenomEtudiant: "",
      username: "",
      classe: "",
      dateObtention: "",
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