<template>
  <div class="p-10 flex flex-col justify-center items-center h-full">
    <div class="shadow-xl bg-gray-300 rounded w-96 p-10 flex flex-col space-y-6">
      <h1 class="font-bold">Inscription</h1>
      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Entreprise</label>
         <select v-model="entrepriseSelected">
          <option v-for="entreprise in entreprises" :value="entreprise" :key="entreprise">
            {{ entreprise.raisonSociale }}
          </option>
        </select>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Etudiant</label>
         <select v-model="etudiantSelected">
          <option v-for="etudiant in etudiants" :value="etudiant" :key="etudiant">
            {{ etudiant.nomEtudiant }} {{ etudiant.prenomEtudiant }}
          </option>
        </select>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Professeur</label>
         <select v-model="professeurSelected">
          <option v-for="professeur in professeurs" :value="professeur" :key="professeur">
            {{ professeur.nomProf }} {{ professeur.prenomProf }}
          </option>
        </select>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Date de début de stage</label>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Date de fin de stage</label>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Type de stage</label>
         <select v-model="type">
          <option value="aucun">
            Aucun
          </option>
          <option value="stage">
            Stage
          </option>
          <option value="alternance">
            Alternance
          </option>
        </select>
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Description du projet</label>
        <input class="rounded p-2" v-model="description" type="text" />
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Observation</label>
        <input class="rounded p-2" v-model="observation" type="text" />
      </div>

      <button class="text-gray-500 border-2 p-4 border-gray-500 rounded transition hover:bg-gray-500 hover:text-white"  @click="inscription">Inscrire</button>
      <h3 v-show="error">L'inscription a echoué, merci de contacter le support</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      error: false,
      entreprises : [],
      professeurs : [],
      etudiants : [],
      entrepriseSelected: "",
      etudiantSelected: "",
      professeurSelected: "",
      dtDebut: new Date(),
      dtFin: new Date(),
      type: "",
      description: "",
      observation: ""
    };
  },
  created() {
    this.getEntreprises();
    this.getProfesseur();
    this.getEtudiant();

  },
  methods: {
    async inscription(){
      try {
        await axios.post("http://localhost:8080/stage/stage/", 
        {
          debutStage: this.dtDebut,
          finStage: this.dtFin,
          typeStage: this.type,
          descProjet: this.description,
          observationStage : this.observation,
          etudiant: this.etudiantSelected,
          entreprise: this.entrepriseSelected,
          prof: this.professeurSelected
        });
        this.error = false;
        this.$router.push("/stagiaire");
      }
      catch (error) {
        this.error = true;
        console.log(error);
      }

    },
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
    async getProfesseur() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/professeur/all"
        );

        this.professeurs = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getEtudiant() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/etudiant/all"
        );

        this.etudiants = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
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