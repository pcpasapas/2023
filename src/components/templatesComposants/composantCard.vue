<script>
export default {
  props: ["composant", "categorie"],
};
</script>

<template>
  <h3>{{ composant.name }}</h3>
  <p class="prix">{{ composant.prix.toFixed(2) }} €</p>
  <h3 v-if="composant.socket !== undefined">Socket : {{ composant.socket }}</h3>
  <h3 v-if="composant.puissance !== undefined">
    Puissance : {{ composant.puissance }}
  </h3>
  <h3 v-if="composant.memoire !== undefined">
    Mémoire : {{ composant.memoire }}
  </h3>
  <h3 v-if="composant.taille !== undefined">Taille : {{ composant.taille }}</h3>
  <img :src="'src/img/' + categorie.prog + '/' + composant.id + '.jpg'" />
</template>

<style>
.prix {
  background-color: blueviolet;
  font-size: 2rem;
  border-radius: 100%;
}

img {
  width: 100px;
}
</style>
