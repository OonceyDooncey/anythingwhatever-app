import { supabase } from "../dbAuth/supabase";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const food = body.foodName;
    const newPopularity = body.popularity + 1;

    const { error } = await supabase
        .from("foods")
        .update({ popularity: newPopularity })
        .eq("food", food);

    if (error) {
        return {
            statusCode: 500,
            message: "Failed to update data",
        };
    }

    if (!error) {
        return {
            statusCode: 200,
            message: "Success",
        };
    }
});
