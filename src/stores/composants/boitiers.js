import { defineStore } from "pinia";

export const useBoitiersStore = defineStore("boitiers", {
  state: () => ({
    boitiers: [
      {
        id: 1,
        name: "Mars Gaming MC-U3 Noir",
        prix: 55.5,
        img: true,
        lien: "https://www.amazon.fr/dp/B0B7S7PGVZ/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0B7S7PGVZ&pd_rd_w=1qWZo&content-id=amzn1.sym.844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_p=844c282f-78f1-4549-b53e-9efd648da0e0&pf_rd_r=7YGWWT81QGFFW2PHPRMX&pd_rd_wg=qoZND&pd_rd_r=f7da6bda-d5cc-4c43-9e27-f12542c7f060&s=computers&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
      },
      {
        id: 2,
        name: "EMPIRE GAMING - Boitier PC Gamer WareFare Noir",
        img: true,
        prix: 63.99,
        lien: "https://www.amazon.fr/EMPIRE-GAMING-WareFare-Ventilateurs-Transparente/dp/B071JYDDPW/ref=psdc_430338031_t3_B07ZRXPKXY?th=1",
      },
      {
        id: 4,
        name: "EMPIRE GAMING – Boitier PC Gamer Spartan",
        img: true,
        prix: 69.99,
        lien: "https://www.amazon.fr/dp/B07ZRX8CNB/ref=emc_b_5_i",
      },
      {
        id: 3,
        name: "EMPIRE GAMING - Boitier PC Gamer Diamond",
        img: true,
        prix: 79.99,
        lien: "https://www.amazon.fr/EMPIRE-GAMING-Plexiglas-Ventilateurs-Adressables/dp/B07ZRXPKXY/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=boitier%2Bpc%2Batx&qid=1665992178&qu=eyJxc2MiOiI3Ljk5IiwicXNhIjoiNy4yNiIsInFzcCI6IjYuNjkifQ%3D%3D&s=computers&sr=1-3&th=1",
      },
    ],
  }),

  getters: {
    getAllBoitiers: (state) => {
      return state.boitiers;
    },
  },
});
