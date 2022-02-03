<template>
  <div class="h-full text-left p-10">
    <div class="text-center pb-10 mb-10 border-b-2 border-gray-800">
      <h1 class="font-bold text-3xl">{{ entreprise.raisonSociale }}</h1>
    </div>

    <h2 class="text-2xl font-bold py-2">Entrée</h2>
    <div class="grid grid-cols-2 gap-5 pb-10 border-b-2 border-gray-800">
      <div class="p-4 bg-gray-100 border-2 border-gray-600 rounded-lg">
        <h3 class="font-bold">Information</h3>
        <p>Nom de l'entreprise: {{ entreprise.raisonSociale }}</p>
        <p>Nom du contact: {{ entreprise.nomContact }}</p>
        <p>Nom du responsable: {{ entreprise.nomResp }}</p>
      </div>

      <div class="p-4 bg-gray-100 border-2 border-gray-600 rounded-lg">
        <h3 class="font-bold">Divers</h3>
        <p>Observation: {{ entreprise.observation }}</p>
        <p>URL de site: {{ entreprise.siteEntreprise }}</p>
        <p>Niveau: {{ entreprise.niveau }}</p>
        <p>Spécialité:</p>
        <ul v-for="spec in entreprise.specialite" :key="spec.num_classe">
          <li>{{ spec.libelle }}</li>
        </ul>
      </div>

      <div class="p-4 bg-gray-100 border-2 border-gray-600 rounded-lg">
        <h3 class="font-bold">Contact</h3>

        <p>Rue: {{ entreprise.rueEntreprise }}</p>
        <p>Code Postal: {{ entreprise.cpEntreprise }}</p>
        <p>Ville: {{ entreprise.villeEntreprise }}</p>
        <p>Téléphone: {{ entreprise.telEntreprise }}</p>
        <p>Fax: {{ entreprise.faxEntreprise }}</p>
        <p>Email: {{ entreprise.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EntrepriseDescription",

  data() {
    return {
      entreprise: [],
    };
  },

  created() {
    this.getEntreprise();
  },

  methods: {
    async getEntreprise() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(
          "http://localhost:8080/stage/entreprise/" + id
        );
        console.log(response.data);
        this.entreprise = response.data;
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