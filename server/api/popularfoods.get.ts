import { supabase } from "../dbAuth/supabase";

type popularFood = {
  food: string;
  popularity: number;
  calories: number;
  cuisine: string;
  image: string;
};

export default defineEventHandler(async () => {
  let response: popularFood[] = [];

  const { data, error } = await supabase.from("foods").select("food, popularity, calories, cuisine, image");

  if (error) {
    console.log(error);
  }

  if (data) {
    response = data.sort((a, b) => b.popularity - a.popularity).slice(0, 3);
  }

  return response;
});
