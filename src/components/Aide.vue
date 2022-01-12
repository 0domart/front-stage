<template>
  <div>
    <div
      class="
        w-full
        h-36
        flex flex-col
        items-end
        p-10
        justify-center
        bg-yellow-200
      "
    >
      <h1 class="bg-green-100">Aide</h1>
      <p>Bienvenue sur la FAQ</p>
    </div>

      <h1>Entreprise</h1>

    <div class="flex flex-col items-start p-14">

      <div class="">
        <p>Comment rechercher une entreprise ?</p>
        <div class="grow bg-gray-600 rounded">
          <p>
            Si vous voulez rechercher une entreprise, vous devez aller sur la
            page "Entreprise", pour cliquer sur.... .
          </p>
          <p>
            Utilisez-les afin de pouvoir trouver les entreprises qui
            correspondent à vos choix.
          </p>
        </div>
      </div>

      <div class="">
        <p>Comment ajouter une entreprise ?</p>
        <div class="bg-gray-600 rounded">
          <p>
            Pour ajouter une entreprise, rendez-vous sur la page "Entreprise", où vous devez cliquer sur le bouton concernant l'entreprise. Toutes les informations ne sont pas obligatoires,
            mais il est conseillé d'en fournir référencées.
          </p>
        </div>
      </div>

      <div class="">
        <p>Comment afficher ou enlever une information concernant l'entreprise ?</p>
        <div class="bg-gray-600 rounded">
          <p>
           En allant sur la page "Entreprise", vous pouvez voir les entreprises déjà référencées. Vous pouvez alors... cependant les afficher grâce à la liste déroulante : choisissez l'information que vous voulez afficher.
           Pour les informations, il vous suffit de cliquer sur le moins situé à l'entête de la colonne représentant l'information en question.
          </p>
        </div>
      </div>

      <div class="">
        <p>N'y a-t-il pas une autre solution pour voir ces informations ?</p>
        <div class="bg-gray-600 rounded">
          <p>
            Bien sûr, vous pouvez cliquer sur l'icône Oeil pour voir toutes les informations concernant l'entreprise qui vous intéresse.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aide",
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
