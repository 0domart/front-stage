<template>
  <div class="bg-yellow-400">
    <h1>
      Connexion
    </h1>
      <input v-model="login" type="text">
      <input v-model="password" type="password">
      <button @click="tryLogin">LOGIN</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data(){
    return {
      login: '',
      password:'',
    }
  },
  methods: {
    async tryLogin() {
    console.log('test');
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/login/" + this.login + "&" + this.password
        );

        console.log(response.data);
        this.$router.push('Stagiaire');
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