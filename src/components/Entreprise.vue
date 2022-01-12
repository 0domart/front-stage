<template>
  <div class="bg-yellow-400">
    <h1>
      Entreprise
    </h1>

    <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Opérations</th>
                    <th>Entreprise</th>
                    <th>Responsable</th>
                    <th>Adresse</th>
                    <th>Site</th>
                    <th>Spécialité</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entreprise in entreprises" :key="entreprise.id">
                    <td></td>
                    <td>{{entreprise.raisonSociale}}</td>
                    <td>{{entreprise.nomResp}}</td>
                    <td><p>{{entreprise.rueEntreprise}}</p><p>{{entreprise.cpEntreprise}} {{ entreprise.villeEntreprise}}</p></td>
                    <td>{{entreprise.siteEntreprise}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Entreprise",

  data() {
    return {
      entreprises: [],
    };
  },

  created() {
    this.getEntreprises();
  },

  methods: {
    async getEntreprises() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/entreprise/all"
        );

        this.entreprises = response.data;
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