<script>
import { useCategoriesStore } from "../stores/categories";
import { useBoitiersStore } from "../stores/composants/boitiers";
import { useAlimsStore } from "../stores/composants/alimentations";
import { useProcesseurStore } from "../stores/composants/processeurs";
import PanierComponent from "./panierComponent.vue";
import { usePanierStore } from "../stores/panier";
import { useCarteMereStore } from "../stores/composants/cartemere";
import { useRamStore } from "../stores/composants/ram";
import { useCartegraphiqueStore } from "../stores/composants/cartegraphique";
import { useSsdStore } from "../stores/composants/ssd";
import { useHddStore } from "../stores/composants/hdd";
import composantCard from "./templatesComposants/composantCard.vue";

export default {
  data() {
    return {
      categories: useCategoriesStore().getAllCategories,
      categorieChoisie: "",
      bouton: "+",
      composants: "",
      panier: usePanierStore(),
      panierDetail: usePanierStore().getAllPanier,
      template: "",
    };
  },
  methods: {
    ajoutPanier(categorie, composant, text, prix) {
      console.log(composant);
      this.panier.modifStorePanier(categorie, composant, text, prix);
    },

    affiche(prog, e) {
      const boutons = document.querySelectorAll("#bouton");
      boutons.forEach(function (boutons) {
        boutons.innerHTML = "+";
      });
      if (this.categorieChoisie === prog) {
        this.categorieChoisie = "";
      } else {
        console.log(prog);
        this.categorieChoisie = prog;
        e.target.textContent = "-";
        if (prog === "boitiers") {
          this.composants = useBoitiersStore().getAllBoitiers;
        } else if (prog === "alim") {
          this.composants = useAlimsStore().getAllAlims;
        } else if (prog === "processeurs") {
          this.composants = useProcesseurStore().getAllProcesseurs;
        } else if (prog === "carteMere") {
          this.composants = useCarteMereStore().getAllCarteMeres;
        } else if (prog === "ram") {
          this.composants = useRamStore().getAllRam;
        } else if (prog === "carteGraphique") {
          this.composants = useCartegraphiqueStore().getAllCartegraphiques;
        } else if (prog === "ssd") {
          this.composants = useSsdStore().getAllSsd;
        } else if (prog === "hdd") {
          this.composants = useHddStore().getAllHdd;
        } else {
          this.composants = useProcesseurStore().getAllProcesseurs;
        }
        return this.composants;
      }
    },
  },
  components: { PanierComponent, composantCard },
};
</script>

<template>
  <div>{{ template }}</div>
  <PanierComponent></PanierComponent>
  <ul
    class="ulCategorie"
    v-for="categorie in categories"
    v-bind:key="categorie.id"
  >
    <div v-if="this.panierDetail[categorie.id].choisi === 0">
      <li class="liCategorie">
        <span>{{ categorie.title }}</span>
        <button id="bouton" @click="affiche(categorie.prog, $event)">
          {{ bouton }}
        </button>
      </li>

      <ul class="ulComposant" v-if="this.categorieChoisie === categorie.prog">
        <li
          class="composant"
          v-for="composant in composants"
          v-bind:key="composant.id"
        >
          <composantCard
            :composant="composant"
            :categorie="categorie"
          ></composantCard>
          <br />
          <a class="choisir" :href="composant.lien" target="_blank">🔍</a>
          <button
            alt="Ajouter au panier"
            class="choisir"
            @click="
              ajoutPanier(
                categorie.id,
                composant.id,
                composant.name,
                composant.prix
              )
            "
          >
            🛒
          </button>
        </li>
      </ul>
    </div>
  </ul>
</template>

<style scoped>
.choisir {
  margin: 5px;
  font-size: 2rem;
  cursor: pointer;
}

.composant {
  background-color: white;
  color: black;
  width: 200px;
  text-align: center;
}
@media (min-width: 900px) {
    .liCategorie {
        font-size: 2rem;
    }
} ;

.ulCategorie {
  margin: 0;
  padding: 0;
}
.ulComposant {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-around;
}
.liCategorie {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
li {
  list-style: none;
  background-color: rgb(132, 51, 207);
  color: white;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

a {
  text-decoration: none;
  background-color: white;
  padding: 10px;
}

button,
a {
  border-radius: 10px;
  border: 0;
  background-color: white;
  font-size: large;
}

button:hover,
a:hover {
  background-color: blueviolet;
}
</style>
