import { useGlobalStore } from "~/stores";

export const fetchFoodInfo = async (food: string) => {
    const store = useGlobalStore();
    store.fetching = true;

    store.selectedFood = food;

    const foodName = food;
    const response = await $fetch("/api/foodinfo", {
        query: { foodName },
    });

    if (response.statusCode !== 200) {
        showError({
            statusCode: response.statusCode,
            statusMessage: response.message,
        });
    }

    store.selectedFoodCalories = response.calories;
    store.selectedFoodCuisine = response.cuisine;
    store.selectedFoodInfo = response.description;
    store.selectedFoodPopularity = response.popularity;
    store.selectedFoodImage = response.image;

    const trimmedFoodName = store.selectedFood.replace(/\s/g, "");
    store.searchURL = `https://www.google.com/maps/search/${trimmedFoodName}`;

    setTimeout(() => {
        store.fetching = false;
    }, 500);
};
