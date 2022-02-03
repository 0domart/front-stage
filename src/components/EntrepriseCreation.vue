<template>
  <div class="p-10 flex flex-col justify-center items-center space-y-5 h-full">

    <div class="shadow-xl bg-green-300 rounded-xl p-8 flex flex-col">
    <h3 v-show="error" @click="error=false" class="cursor-pointer border-2 border-red-500 bg-red-200 rounded-xl p-2">
      L'inscription a echoué, merci de remplir tous les champs obligatoires
    </h3>
      <h1 class="font-bold text-2xl">Création d'une nouvelle entreprise</h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Nom entreprise</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.raisonSociale" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Nom du contact</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.nomContact" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Nom responsable</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.nomResp" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Rue</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.rueEntreprise" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Code Postal</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.cpEntreprise" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Ville</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.villeEntreprise" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Téléphone</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.telEntreprise" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Fax</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.faxEntreprise" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Email</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.email" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Observation</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.observation" />
        </div>

        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">URL de site</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.siteEntreprise" />
        </div>

        
        <div class="flex flex-col justify-start space-y-2">
          <label class="self-start" for="login">Niveau</label>
          <input class="p-2.5 rounded" type="text" v-model="entreprise.niveau" />
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
          @click="createEntreprise"
        > 
          Creation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EntrepriseCreation",
  data() {
    return {
      error: false,
      entreprise: {},
    };
  },
  created() {
  },
  methods: {
    async createEntreprise() {
      try {
        await axios.post("http://localhost:8080/stage/entreprise/", this.entreprise);
        this.error = false;
        this.$router.push("/stagiaire");
      } catch (error) {
        this.error = true;
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