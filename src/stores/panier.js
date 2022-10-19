import { defineStore } from "pinia";

export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: [
      { id: 0, title: "Boitier", choisi: 0, text: "", prix: 0.0 },
      { id: 1, title: "Alimentation", choisi: 0, text: "", prix: 0.0 },
      { id: 2, title: "Processeur", choisi: 0, text: "", prix: 0.0 },
      { id: 3, title: "Carte Mère", choisi: 0, text: "", prix: 0.0 },
      { id: 4, title: "Ram", choisi: 0, text: "", prix: 0.0 },
      { id: 5, title: "Carte Graphique", choisi: 0, text: "", prix: 0.0 },
      { id: 6, title: "SSD", choisi: 0, text: "", prix: 0.0 },
      { id: 7, title: "Disque Dur Hdd", choisi: 0, text: "", prix: 0.0 },
    ],
  }),

  getters: {
    getAllPanier: (state) => {
      return state.panier;
    },
  },

  actions: {
    modifStorePanier(id, payload, text, prix) {
      this.panier[id].choisi = payload;
      this.panier[id].text = text;
      this.panier[id].prix = prix;
    },
  },
});
