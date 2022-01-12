<template>
  <div class="p-10 flex flex-col justify-center items-center h-full">
    <h1>Connexion</h1>

    <div class="bg-gray-300 rounded p-10 flex flex-col justify-around items-end space-y-4">
      <div class="inline">
        <label for="login">Login</label>
        <input v-model="login" type="text" />
      </div>

      <div class="inline">
        <label for="password">Password</label>
        <input v-model="password" type="password" />
      </div>
      <button @click="tryLogin">LOGIN</button>
      <h3 v-show="accesRefused">Accès refusé</h3>
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
      accesRefused: false,
    };
  },
  methods: {
    async tryLogin() {
      console.log("test");
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/login/" +
            this.login +
            "&" +
            this.password
        );
        if (response.data.statut == "refused") {
          console.log("Accès refusé");
          this.accesRefused = true;
        } else {
          this.accesRefused = false;
          localStorage.clear();
          localStorage.setItem('statut', response.data.statut);
          localStorage.setItem('userName', response.data.nameUser);
          window.dispatchEvent(new CustomEvent('oh', {
            detail: {
              storage: response.data.statut
            }
          }));
          this.$router.push('/');
        }
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