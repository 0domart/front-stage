<template>
  <div class="bg-yellow-400">
    <h1>
      Stagiaires
    </h1>

    <Button>Rechercher une entreprise</Button>

    <Button>Ajouter une entreprise</Button>

    <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Opérations</th>
                    <th>Etudiant</th>
                    <th>Entreprises</th>
                    <th>Professeur</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stage in stages" :key="stage.id">
                    <td></td>
                    <td>{{entreprise.raisonSociale}}</td>
                    <td>{{entreprise.nomResp}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Stagiaire",

  data() {
    return {
      stages: [],
    };
  },

  created() {
    this.getStagiaires();
  },

  methods: {
    async getStagiaires() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/etudiant/all"
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