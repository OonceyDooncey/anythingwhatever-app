import { supabase } from "../dbAuth/supabase";

interface popularFoodResponse {
    popularFoodList: object[];
    statusCode: number;
    message: string;
}

export default defineEventHandler(async () => {
    let response: popularFoodResponse;

    const { data, error } = await supabase
        .from("foods")
        .select("food, popularity, calories, cuisine, image");

    if (error) {
        response = {
            popularFoodList: [],
            statusCode: 500,
            message: "Failed to retrieve data",
        };
        return response;
    }

    const sortedList = data
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3);

    response = {
        popularFoodList: sortedList,
        statusCode: 200,
        message: "Success",
    };

    return response;
});
