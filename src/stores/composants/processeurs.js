import { defineStore } from "pinia";

export const useProcesseurStore = defineStore("processeurs", {
  state: () => ({
    processeurs: [
      {
        id: 2,
        name: "AMD Ryzen 3 4100 Wraith Stealth",
        prix: 119.95,
        socket: "AM4",
        puissanceMini: 3.8,
        puissanceBoost: 4.0,
        img: true,
        lien: "https://www.ldlc.com/fiche/PB00497776.html",
      },
      {
        id: 1,
        name: "AMD Ryzen 5 4500 avec Ventilateur Wraith Stealth",
        prix: 116.64,
        socket: "AM4",
        puissanceMini: 3.6,
        puissanceBoost: 4.1,
        img: true,
        lien: "https://www.amazon.fr/AMD-Ryzen-4500-Ventilateur-Stealth/dp/B09VCJN7HZ/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=processeur&qid=1665997123&qu=eyJxc2MiOiI2LjUyIiwicXNhIjoiNS40NyIsInFzcCI6IjUuMzUifQ%3D%3D&refinements=p_36%3A428409031&rnid=428393031&s=computers&sr=1-14",
      },
    ],
  }),

  getters: {
    getAllProcesseurs: (state) => {
      return state.processeurs;
    },
  },
});
