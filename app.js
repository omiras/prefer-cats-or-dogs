import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const favoriteAnimal = ref("");

    // Computed property para verificar si el animal favorito es un gato
    const isFavoriteCat = computed(() => {
      return favoriteAnimal.value === "gatos";
    });

    // Computed property para verificar si el animal favorito es un perro
    const isFavoriteDog = computed(() => {
      return favoriteAnimal.value === "perros";
    });

    return {
      favoriteAnimal,
      isFavoriteCat,
      isFavoriteDog,
    };
  },
}).mount("#app");
