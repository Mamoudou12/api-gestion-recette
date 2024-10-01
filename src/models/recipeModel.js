import db from '../config/db.js';

class Recipe {
  // Récupérer toutes les recettes
  static async getAllRecipes() {
    const [results] = await db.query('SELECT * FROM recipes');
    return results;
  }

  // Récupérer une recette par ID
  static async getRecipeById(id) {
    const [results] = await db.query('SELECT * FROM recipes WHERE id = ?', [id]);
    return results.length > 0 ? results[0] : null;
  }

  // Créer une nouvelle recette
  static async createRecipe(title, ingredients, type) {
    const [result] = await db.query(
      'INSERT INTO recipes (title, ingredients, type) VALUES (?, ?, ?)',
      [title, ingredients, type]
    );
    return result.insertId;
  }

  // Mettre à jour une recette existante
  static async updateRecipe(id, title, ingredients, type) {
    const [result] = await db.query(
      'UPDATE recipes SET title = ?, ingredients = ?, type = ? WHERE id = ?',
      [title, ingredients, type, id]
    );
    return result.affectedRows;
  }

  // Supprimer une recette
  static async deleteRecipe(id) {
    const [result] = await db.query('DELETE FROM recipes WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Recipe;
