<script>
import { usePanierStore } from "../stores/panier";

export default {
  data() {
    return {
      produitsPanier: usePanierStore().getAllPanier,
      prixTotalPanier: 0,
    };
  },
  methods: {
    retirerproduit(categorie, composant) {
      usePanierStore().modifStorePanier(categorie, composant);
    },
  },
  computed: {
    prixTotalPanier() {
      this.prixTotalPanier = 0;
      for (let i = 0; i < this.produitsPanier.length; i++) {
        if (this.produitsPanier[i].prix !== undefined) {
          this.prixTotalPanier += this.produitsPanier[i].prix;
        }
      }
      return this.prixTotalPanier.toFixed(2);
    },
  },
};
</script>

<template>
  <div class="panier" v-if="prixTotalPanier !== '0.00'">
    <p class="selection">Votre sélection</p>
    <div v-for="produit in produitsPanier" :key="produit.id">
      <div v-if="produit.choisi !== 0">
        <tbody>
          <tr>
            <td class="col1">{{ produit.title }}</td>
            <td class="col2">{{ produit.text }}</td>
            <td class="col3">{{ produit.prix }} €</td>
            <td class="col4">
              <button @click="retirerproduit(produit.id, 0)">X</button>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
    <div class="prixTotal" v-if="prixTotalPanier !== '0.00'">
      <tr>
        <td>Prix total</td>
        <td>{{ prixTotalPanier }} €</td>
      </tr>
    </div>
  </div>
</template>

<style>
.panier {
  border: 1px solid blueviolet;
  padding: 10px;
  margin: 10px;
}
.selection {
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

.prixTotal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 2rem;
}
.col1 {
  width: 100px;
  border: 1px solid black;
}

.col2 {
  width: 200px;
}
.col3 {
  width: 20%;
}
td {
  padding: 10px;
}

.panier {
  text-align: center;
}
</style>
