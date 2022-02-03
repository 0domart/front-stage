<template>
  <div
    class="
      p-10
      min-h-full
      flex flex-col
      items-center
      space-y-5
    "
  >
    <h1 class="text-3xl font-bold">Modification de l'entreprise</h1>

    <form class="bg-yellow-100 border-2 border-gray-900 rounded-xl flex space-x-5 p-16 shadow-xl">
      <div class="flex flex-col">
        <label class="p-2 flex-grow text-left" for="nomEntreprise">Nom de l'entreprise</label>
        <label class=" p-2 flex-grow text-left" for="nomContact">Nom du contact</label>
        <label class=" p-2 flex-grow text-left" for="resp">Nom du responsable</label>
        <label class=" p-2 flex-grow text-left" for="rue">Rue</label>
        <label class=" p-2 flex-grow text-left" for="codePostal">Code postal</label>
        <label class=" p-2 flex-grow text-left" for="ville">Ville</label>
        
        <label class="p-2 flex-grow text-left" for="tel">Téléphone</label>
        <label class=" p-2 flex-grow text-left" for="fax">Fax</label>
        <label class=" p-2 flex-grow text-left" for="email">Email</label>
        <label class=" p-2 flex-grow text-left" for="observation">Observation</label>
        <label class=" p-2 flex-grow text-left" for="url">Lien URL</label>
        <label class=" p-2 flex-grow text-left" for="niveau">Niveau</label>
        <label class=" p-2 flex-grow text-left" for="spec">Specialité</label>
      </div>


<div class="flex flex-col space-y-2.5">
        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="nomEntreprise"
          v-model="entreprise.raisonSociale"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="nomContact"
          v-model="entreprise.nomContact"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="resp"
          v-model="entreprise.nomResp"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="rue"
          v-model="entreprise.rueEntreprise"
        />


        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="codePostal"
          v-model="entreprise.cpEntreprise"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="ville"
          v-model="entreprise.villeEntreprise"
        />

                <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="tel"
          v-model="entreprise.telEntreprise"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="fax"
          v-model="entreprise.faxEntreprise"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="email"
          v-model="entreprise.email"
        />


        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="observation"
          v-model="entreprise.observation"
        />

        <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="url"
          v-model="entreprise.siteEntreprise"
        />

                <input
          class=" p-2 flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800"
          type="text"
          id="niveau"
          v-model="entreprise.niveau"
        />

      <ul class=" p-2 bg-white flex-grow rounded border-2 border-gray-400 transition hover:border-gray-800">
        <li v-for="specialite in entreprise.specialite" :key="specialite.num_classe">
          {{specialite.libelle}}
        </li>
      </ul>
      </div>
    </form>
    <button class="text-gray-900 bg-yellow-300 font-bold border-2 px-10 py-2.5 border-gray-800 rounded transition hover:bg-gray-900 hover:text-white ease-in-out"  @click="modifierEntreprise">Modifier</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EtudiantDescription",

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

        console.log(this.entreprise);
      } catch (error) {
        console.log(error);
      }
    },
     async modifierEntreprise(){
      try {
        await axios.put("http://localhost:8080/stage/entreprise/" + this.entreprise.num_entreprise, this.entreprise);
        this.error = false;
        this.$router.push({
          name: 'Entreprise',
          params: { validation: true }
        });
      }
      catch (error) {
        this.error = true;
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