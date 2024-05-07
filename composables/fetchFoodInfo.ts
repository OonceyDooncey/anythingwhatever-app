import { useGlobalStore } from "~/stores";

export const fetchFoodInfo = async (food: string) => {
    const store = useGlobalStore();

    store.selectedFood = food;

    const foodName = food;
    const response = await $fetch("/api/foodinfo", {
        query: { foodName },
    });

    if (response.statusCode !== 200) {
        showError({
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
        });
    }

    store.selectedFoodCalories = response.calories;
    store.selectedFoodCuisine = response.cuisine;
    store.selectedFoodInfo = response.description;
    store.selectedFoodPopularity = response.popularity;
};
