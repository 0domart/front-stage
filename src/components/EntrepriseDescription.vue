<template>
  <div class="bg-yellow-400">
    <h1>
      Entreprise Description
    </h1>

    <h2>Entrée</h2>

    <h3>Informations</h3>
    <p>Nom de l'entreprise : {{entreprise.raisonSociale}}</p>
    <p>Nom du contact : {{entreprise.nomContact}}</p>
    <p>Nom du responsable : {{entreprise.nomResp}}</p>

    <h3>Divers</h3>
    <p>Observation : {{entreprise.observation}}</p>
    <p>Url du site : {{entreprise.siteEntreprise}}</p>
    <p>Niveau : {{entreprise.niveau}}</p>
    <div v-for="spec in entreprise.specialite" :key="spec.num_classe"><p>{{spec.libelle}}</p></div>

    <h3>Contact</h3>
    <p>Rue : {{entreprise.rueEntreprise}}</p>
    <p>Code postal : {{entreprise.cpEntreprise}}</p>
    <p>Ville : {{entreprise.villeEntreprise}}</p>
    <p>Téléphone : {{entreprise.telEntreprise}}</p>
    <p>Fax : {{entreprise.faxEntreprise}}</p>
    <p>Email : {{entreprise.email}}</p>

  </div>
</template>

<script>
import axios from 'axios';

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