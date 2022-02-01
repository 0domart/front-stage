<template>
<div class="h-full flex flex-col justify-center items-center">
  <div class="border-4 border-gray-800 p-4 rounded">
    <h1 class="text-6xl font-bold">Stage BTS</h1>
    <h2 class="text-2xl">Bienvenue sur la page de gestion des stages</h2>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HelloWorld",

  data() {
    return {
      classes: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/classe/all"
        );

        this.classes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },  

  created() {
    this.getData();
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
