import { supabase } from "../dbAuth/supabase";

interface popularFood {
    food: string;
    popularity: number;
    calories: number;
    cuisine: string;
    image: string;
}

interface popularFoodResponse {
    popularFoodList: popularFood[];
    statusCode: number;
    message: string;
}

export default defineEventHandler(async () => {
    let response: popularFoodResponse;
    let sortedList: popularFood[] = [];

    const { data, error } = await supabase
        .from("foods")
        .select("food, popularity, calories, cuisine, image");

    if (error) {
        response = {
            popularFoodList: [],
            statusCode: 500,
            message: "Failed to retrieve data",
        };
    }

    if (data) {
        sortedList = data
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 3);
    }

    response = {
        popularFoodList: sortedList,
        statusCode: 200,
        message: "Success",
    };

    return response;
});
