import { supabase } from "../dbAuth/supabase";

interface foodInfoResponse {
    cuisine: string | null;
    calories: number | null;
    description: string | null;
    popularity: number | null;
    statusCode: number;
    message: string;
}

export default defineEventHandler(async (event) => {
    const foodName = getQuery(event).foodName;

    let response: foodInfoResponse;

    const { data, error } = await supabase
        .from("foods")
        .select("cuisine, calories, description, popularity")
        .eq("food", foodName);

    if (error) {
        response = {
            description: null,
            cuisine: null,
            calories: null,
            popularity: null,
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
        statusCode: 200,
        message: "Success",
    };

    return response;
});
