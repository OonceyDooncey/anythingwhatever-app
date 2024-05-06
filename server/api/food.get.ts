import { supabase } from "../dbAuth/supabase";

interface fetchResponse {
    suggestedFood: string;
    statusCode: number;
    message: string;
}

export default defineEventHandler(async (event) => {
    const category = getQuery(event).category;
    const value = getQuery(event).value;

    let foodSuggestions: string[] = [];

    if (category === "anything") {
        const { data, error } = await supabase.from("foods").select("food");

        if (error) {
            return {
                suggestedFood: "",
                statusCode: 500,
                message: "Failed to retrieve data",
            };
        }

        foodSuggestions = data.map((data) => data.food);
    }

    if (value) {
        const { data, error } = await supabase
            .from("foods")
            .select("food")
            .eq(`${category}`, value);

        if (error) {
            return {
                suggestedFood: "",
                statusCode: 500,
                message: "Failed to retrieve data",
            };
        }

        if (data.length == 0) {
            return {
                suggestedFood: "",
                statusCode: 404,
                message: "No data found",
            };
        }

        foodSuggestions = data.map((data) => data.food);
    }

    const food =
        foodSuggestions[Math.floor(Math.random() * foodSuggestions.length)];

    const response: fetchResponse = {
        suggestedFood: food,
        statusCode: 200,
        message: "Success in retrieving data",
    };

    return response;
});
