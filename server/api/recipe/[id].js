import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  const filePath = resolve("server/data/recipes.json");
  const data = readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(data);
  const recipes = parsedData.recipes;
  const id = Number.parseInt(event.context.params.id);

  const recipe = recipes.find((eachRecipe) => eachRecipe.id === id);

  if (recipe) {
    return recipe;
  } else {
    throw createError({ statusCode: 404, statusMessage: "Recipe not found" });
  }
});
