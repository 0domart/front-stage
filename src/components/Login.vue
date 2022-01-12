<template>
  <div class="p-10 flex flex-col justify-center items-center h-full">
    <div class="shadow-xl bg-gray-300 rounded w-96 p-10 flex flex-col space-y-6">
      <h1 class="font-bold">Connexion</h1>
      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="login">Login</label>
        <input class="rounded p-2" v-model="login" type="text" />
      </div>

      <div class="flex flex-col justify-start space-y-2">
        <label class="self-start" for="password">Password</label>
        <input class="rounded p-2" v-model="password" type="password" />
      </div>

      <button class="text-gray-500 border-2 p-4 border-gray-500 rounded transition hover:bg-gray-500 hover:text-white"  @click="tryLogin">LOGIN</button>
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
          localStorage.setItem("statut", response.data.statut);
          localStorage.setItem("userName", response.data.nameUser);
          window.dispatchEvent(
            new CustomEvent("oh", {
              detail: {
                storage: response.data.statut,
              },
            })
          );
          this.$router.push("/");
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