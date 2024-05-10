import { supabase } from "../dbAuth/supabase";

interface foodInfoResponse {
    cuisine: string | undefined;
    calories: number | undefined;
    description: string | undefined;
    popularity: number | undefined;
    image: string | undefined;
    statusCode: number;
    message: string;
}

export default defineEventHandler(async (event) => {
    const foodName = getQuery(event).foodName;

    let response: foodInfoResponse;

    const { data, error } = await supabase
        .from("foods")
        .select("cuisine, calories, description, popularity, image")
        .eq("food", foodName);

    if (error) {
        response = {
            description: undefined,
            cuisine: undefined,
            calories: undefined,
            popularity: undefined,
            image: undefined,
            statusCode: 500,
            message: "Failed to retrieve data",
        };
        return response;
    }

    response = {
        description: data[0].description,
        cuisine: data[0].cuisine,
        calories: data[0].calories,
        popularity: data[0].popularity,
        image: data[0].image,
        statusCode: 200,
        message: "Success",
    };

    return response;
});
