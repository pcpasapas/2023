import { defineStore } from "pinia";

export const useCarteMereStore = defineStore("carteMere", {
  state: () => ({
    carteMere: [
      {
        id: 2,
        name: "MSI A320M-A PRO",
        prix: 44.95,
        socket: "AM4",
        ddr: "DDR 4",
        img: true,
        lien: "https://www.ldlc.com/fiche/PB00277939.html",
      },
      {
        id: 1,
        name: "GIGABYTE GA-A320M-S2H",
        prix: 62.89,
        socket: "AM4",
        ddr: "DDR 4",
        img: true,
        lien: "https://www.amazon.fr/Giga-Byte-Ga-a320-m-s2h-Am4-A320-mATX-U3-1-SATA-DDR4/dp/B078KBKFZ6/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=carte+mere+am4&qid=1665997932&qu=eyJxc2MiOiI1LjgxIiwicXNhIjoiNS4zMyIsInFzcCI6IjQuOTEifQ%3D%3D&s=computers&sr=1-4",
      },
    ],
  }),

  getters: {
    getAllCarteMeres: (state) => {
      return state.carteMere;
    },
  },
});
