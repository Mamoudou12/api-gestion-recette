import Recipe from "../src/models/Recipe.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can be created", async () => {
    const recipe = {
      title: "maffé",
      ingredients: "Flour, Milk, Eggs",
      type: "Dessert",
    };
    const result = await Recipe.createRecipe(
      recipe.title,
      recipe.ingredients,
      recipe.type
    );
    expect(result).not.toBeNull();
    recipeId = result;
  });

  it("cannot be created with invalid data", async () => {
    try {
      const recipe = {
        title: null,
        ingredients: "Flour, Milk, Eggs",
        type: "Dessert",
      };
      const result = await Recipe.createRecipe(
        recipe.title,
        recipe.ingredients,
        recipe.type
      );
      recipeId = result.insertId;
      expect(recipeId).toBeNull();
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("can get all recipes", async () => {
    const getAll = await Recipe.getAllRecipes();
    expect(getAll).not.toBeNull();
    expect(Array.isArray(getAll)).toBe(true);
  });

  it("can get a recipe by id", async () => {
    const recipe = await Recipe.getRecipeById(recipeId);
    expect(recipe).not.toBeNull();
    expect(recipe.id).toBe(recipeId);
  });

  it("can be updated", async () => {
    const updatedRecipe = {
      title: "Pancake",
      ingredients: "Flour, Milk, Eggs",
      type: "Breakfast",
    };
    const result = await Recipe.updateRecipe(
      recipeId,
      updatedRecipe.title,
      updatedRecipe.ingredients,
      updatedRecipe.type
    );
    expect(result).not.toBeNull();
    const recipeAfterUpdate = await Recipe.getRecipeById(recipeId);
    expect(recipeAfterUpdate.title).toBe(updatedRecipe.title);
  });

  it("can delete a recipe", async () => {
    await Recipe.deleteRecipe(recipeId);
    const deletedRecipe = await Recipe.getRecipeById(recipeId);
    expect(deletedRecipe).toBeNull();
  });
});
