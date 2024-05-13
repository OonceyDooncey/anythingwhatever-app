import { defineStore } from "pinia";

export const useGlobalStore = defineStore("useGlobalStore", {
    state: () => ({
        selectedFood: "",
        selectedFoodCalories: 0 as number | undefined,
        selectedFoodCuisine: "" as string | undefined,
        selectedFoodInfo: "" as string | undefined,
        selectedFoodPopularity: 0 as number | undefined,
        selectedFoodImage: "" as string | undefined,
        searchURL: "",
        fetching: true,
        updatePopularity: true,
    }),
});
