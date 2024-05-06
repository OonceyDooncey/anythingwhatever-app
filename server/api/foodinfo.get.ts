import { supabase } from "../dbAuth/supabase";

interface foodInfoResponse {
    cuisine: string;
    calories: number;
    description: string;
    statusCode: number;
    message: string;
}

export default defineEventHandler(async (event) => {
    const foodName = getQuery(event).foodName;

    let response: foodInfoResponse;

    const { data, error } = await supabase
        .from("foods")
        .select("cuisine, calories, description")
        .eq("food", foodName);

    if (error) {
        response = {
            description: "",
            cuisine: "",
            calories: 0,
            statusCode: 500,
            message: "Failed to retrieve data",
        };
        return response;
    }

    response = {
        description: data[0].description,
        cuisine: data[0].cuisine,
        calories: data[0].calories,
        statusCode: 200,
        message: "Success",
    };

    return response;
});
