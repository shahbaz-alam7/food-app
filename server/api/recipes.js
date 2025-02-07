import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  const filePath = resolve("server/data/recipes.json");
  const data = readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(data);
  const recipes = parsedData.recipes;
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const skip = (page - 1) * limit;
  const paginatedRecipes = recipes.slice(skip, skip + limit);

  return {
    limit,
    skip,
    total: recipes.length,
    currentPage: page,
    totalPages: Math.ceil(recipes.length / limit),
    recipes: paginatedRecipes,
  };
});
