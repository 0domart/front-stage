<template>
  <div class="p-10 flex flex-col justify-center items-center space-y-5 h-full">
    <h3 v-show="error" @click="error=false" class="cursor-pointer border-2 border-red-500 bg-red-200 rounded-xl p-2">
      L'inscription a echoué, merci de remplir tous les champs obligatoires
    </h3>
    <div class="shadow-xl bg-green-300 rounded-xl p-8 flex flex-col">
      <h1 class="font-bold text-2xl">Inscription</h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Entreprise</label>
          <select class="p-2.5 rounded" v-model="entrepriseSelected">
            <option
              v-for="entreprise in entreprises"
              :value="entreprise"
              :key="entreprise"
            >
              {{ entreprise.raisonSociale }}
            </option>
          </select>
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Etudiant</label>
          <select class="p-2.5 rounded" v-model="etudiantSelected">
            <option
              v-for="etudiant in etudiants"
              :value="etudiant"
              :key="etudiant"
            >
              {{ etudiant.nomEtudiant }} {{ etudiant.prenomEtudiant }}
            </option>
          </select>
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Professeur</label>
          <select class="p-3 rounded" v-model="professeurSelected">
            <option
              v-for="professeur in professeurs"
              :value="professeur"
              :key="professeur"
            >
              {{ professeur.nomProf }} {{ professeur.prenomProf }}
            </option>
          </select>
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Date de début de stage</label>
          <input class="p-2.5 rounded" type="date" v-model="dtDebut" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Date de fin de stage</label>
          <input class="p-2.5 rounded" type="date" v-model="dtFin" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Type de stage</label>
          <select class="p-2.5 rounded" v-model="type">
            <option value="aucun">Aucun</option>
            <option value="stage">Stage</option>
            <option value="alternance">Alternance</option>
          </select>
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Description du projet</label>
          <input class="rounded p-2.5" v-model="description" type="text" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Observation</label>
          <input class="rounded p-2.5" v-model="observation" type="text" />
        </div>

        <button
          class="
            text-green-800
            font-bold
            uppercase
            text-xl
            border-2
            mt-8
            p-2.5
            border-green-800
            rounded
            transition
            ease-in-out
            hover:bg-green-700 hover:text-white
            col-span-2
          "
          @click="inscription"
        >
          Inscrire
        </button>
      </div>
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
      entreprises: [],
      professeurs: [],
      etudiants: [],
      entrepriseSelected: "",
      etudiantSelected: "",
      professeurSelected: "",
      dtDebut: new Date(),
      dtFin: new Date(),
      type: "",
      description: "",
      observation: "",
    };
  },
  created() {
    this.getEntreprises();
    this.getProfesseur();
    this.getEtudiant();
  },
  methods: {
    async inscription() {
      try {
        await axios.post("http://localhost:8080/stage/stage/", {
          debutStage: this.dtDebut,
          finStage: this.dtFin,
          typeStage: this.type,
          descProjet: this.description,
          observationStage: this.observation,
          etudiant: this.etudiantSelected,
          entreprise: this.entrepriseSelected,
          prof: this.professeurSelected,
        });
        this.error = false;
        this.$router.push("/stagiaire");
      } catch (error) {
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