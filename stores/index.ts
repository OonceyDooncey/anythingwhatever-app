import { defineStore } from "pinia";

export const useGlobalStore = defineStore("useGlobalStore", {
    state: () => ({
        selectedFood: "",
        selectedFoodCalories: 0,
        selectedFoodCuisine: "",
        selectedFoodInfo: "",
        selectedFoodPopularity: 0,
        searchURL: "",
    }),
});
