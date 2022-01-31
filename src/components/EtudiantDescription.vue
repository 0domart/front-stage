<template>
  <div class="bg-yellow-400">
    <h1>
      Informations concernant l'étudiant
    </h1>


    <p>Nom : {{etudiant.nomEtudiant}}</p>
    <p>Prénom : {{etudiant.prenomEtudiant}}</p>
    <p>Nom d'utilisateur (8 caractères)* : {{etudiant.login}}</p>
    <p>Mot de passe (entre 8 et 30 caractères)* : {{etudiant.mdp}}</p>
    <p>Date d'obtention du BTS (AAAA-MM-JJ) : {{etudiant.siteEntreprise}}</p>
    <p>Classe : {{etudiant.numClasse}}</p>

  </div>
</template>

<script>
import axios from 'axios';

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