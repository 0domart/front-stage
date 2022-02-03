<template>
  <div
    class="
      p-10
      h-full
      flex flex-col
      items-center
      space-y-20
    "
  >
    <h1 class="text-3xl font-bold">Informations concernant l'étudiant</h1>
        <h3 v-show="error" class="cursor-pointer border-2 border-red-500 bg-red-200 rounded-xl p-2">
      L'inscription a echoué, merci de remplir tous les champs obligatoires
    </h3>

<form>
  <div class="bg-green-300 border-2 border-green-600 rounded-xl flex space-x-10 p-10 shadow-xl">
      <div class="flex flex-col space-y-5">
        <label class="p-3 flex-grow text-left" for="nomEtudiant">Nom</label>
        <label class=" p-3 flex-grow text-left" for="prenomEtudiant">Prénom</label>
        <label class=" p-3 flex-grow text-left" for="login">Nom d'utilisateur</label>
        <label class=" p-3 flex-grow text-left" for="password">Mot de passe</label>
        <label class=" p-3 flex-grow text-left" for="dateObtention">Date d'obtention du BTS (JJ-MM-AAAA)</label>
        <label class=" p-3 flex-grow text-left" for="classe">Classe</label>
      </div>


<div class="flex flex-col space-y-5">
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="nomEtudiant"
          v-model="this.etudiant.nomEtudiant"
          placeholder="Entrez un nom"
        />

        
        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="prenomEtudiant"
          v-model="this.etudiant.prenomEtudiant"
          placeholder="Entrez un prénom"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="login"
          v-model="this.etudiant.login"
          placeholder="Entrez un login"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="password"
          id="password"
          v-model="this.etudiant.mdp"
          placeholder="Entrez un mot de passe"
        />


        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="date"
          id="dateObtention"
          v-model="this.etudiant.anneeObtention"
        />

        <input
          class=" p-3 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="number"
          id="classe"
          v-model="this.etudiant.numClasse"
          placeholder="Numéro de classe"
        />
</div>
  </div>
          <button class="text-gray-900 bg-green-100 font-bold border-2 px-10 py-2.5 my-6 border-gray-800 rounded transition hover:bg-gray-900 hover:text-white ease-in-out"  @click="creerEtudiant">Ajouter</button>

    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EtudiantDescription",

  data() {
    return {
      etudiant: {},
      error:false,
    };
  },

  created() {
  },

  methods: {
     async creerEtudiant(){
      try {
        await axios.post("http://localhost:8080/stage/etudiant/", this.etudiant);
        this.error = false;
      }
      catch (error) {        
        this.error = true;
        console.log(error);
      }
    },
  },
};
</script>