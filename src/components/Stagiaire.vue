<template>
  <div class="p-10">
    <div class="flex space-x-5">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          style="fill: #000000"
          class="absolute m-2"
        >
          <path
            d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"
          ></path>
        </svg>
        <input
          type="text"
          v-model="keyword"
          class="
          w-96
            p-3
            pl-10
            bg-white
            rounded
            border-2 border-gray-300
            transition
            hover:border-gray-800
          "
          placeholder="Rechercher un etudiant existant"
        />
      </div>

      <div class="">
        <Button
          @click="creerEtudiant()"
          class="
            p-3
            bg-white
            rounded
            border-2 border-gray-300
            transition
            hover:bg-gray-800 hover:text-white hover:border-gray-800
            focus:border-white
          "
          >Ajouter un stagiaire</Button
        >
      </div>
    </div>

    <hr class="m-6" />

    <table class="table-fixed mt-2 text-black">
      <thead class="">
        <tr class="">
          <th>Opérations</th>
          <th>Etudiant</th>
          <th>Entreprises</th>
          <th>Professeur</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-2 transition hover:bg-blue-100 rounded border-gray-800"
          v-for="stage in filteredList"
          v-bind:key="stage.numStage"
        >
          <td>
            <div class="flex justify-around items-center">
              <a @click="descriptionEtudiant(stage.etudiant.num_etudiant)" class="cursor-pointer">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 83.78"
                  style="enable-background: new 0 0 122.88 83.78"
                  xml:space="preserve"
                  class="rounded w-8"
                >
                  <g>
                    <path
                      d="M95.73,10.81c10.53,7.09,19.6,17.37,26.48,29.86l0.67,1.22l-0.67,1.21c-6.88,12.49-15.96,22.77-26.48,29.86 C85.46,79.88,73.8,83.78,61.44,83.78c-12.36,0-24.02-3.9-34.28-10.81C16.62,65.87,7.55,55.59,0.67,43.1L0,41.89l0.67-1.22 c6.88-12.49,15.95-22.77,26.48-29.86C37.42,3.9,49.08,0,61.44,0C73.8,0,85.45,3.9,95.73,10.81L95.73,10.81z M60.79,22.17l4.08,0.39 c-1.45,2.18-2.31,4.82-2.31,7.67c0,7.48,5.86,13.54,13.1,13.54c2.32,0,4.5-0.62,6.39-1.72c0.03,0.47,0.05,0.94,0.05,1.42 c0,11.77-9.54,21.31-21.31,21.31c-11.77,0-21.31-9.54-21.31-21.31C39.48,31.71,49.02,22.17,60.79,22.17L60.79,22.17L60.79,22.17z M109,41.89c-5.5-9.66-12.61-17.6-20.79-23.11c-8.05-5.42-17.15-8.48-26.77-8.48c-9.61,0-18.71,3.06-26.76,8.48 c-8.18,5.51-15.29,13.45-20.8,23.11c5.5,9.66,12.62,17.6,20.8,23.1c8.05,5.42,17.15,8.48,26.76,8.48c9.62,0,18.71-3.06,26.77-8.48 C96.39,59.49,103.5,51.55,109,41.89L109,41.89z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </td>
          <td>{{ stage.etudiant.nomEtudiant }} {{ stage.etudiant.prenomEtudiant}}</td>
          <td>{{ stage.entreprise.raisonSociale }}</td>
          <td>{{ stage.prof.nomProf }} {{ stage.prof.prenomProf }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Stagiaire",

  data() {
    return {
      keyword: '',
      stages: [],
    };
  },

  created() {
    this.getStagiaires();
  },
  computed: {
    filteredList() {
      return this.stages;
    }
  },


  methods: {
    redirectWebsite(url){
      window.open(url, '_blank');
    },
    descriptionEtudiant(id){
      this.$router.push("/etudiant/" + id);
    },
    creerEtudiant(){
      this.$router.push("/creerEtudiant");
    },
    async getStagiaires() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/stage/all"
        );

        this.stages = response.data;
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