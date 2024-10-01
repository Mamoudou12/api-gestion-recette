import { body, param, validationResult } from 'express-validator';
import Recipe from '../models/RecipeModel.js';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Récupérer toutes les recettes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.getAllRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer une recette par ID
export const getRecipeById = [
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  handleValidationErrors,
  async (req, res) => {
    const { id } = req.params;
    try {
      const recipe = await Recipe.getRecipeById(id);

      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

// Créer une nouvelle recette
export const createRecipe = [
  body('title')
    .isString()
    .withMessage('Title must be a string')
    .notEmpty()
    .withMessage('Title is required'),
  body('ingredients')
    .isString()
    .withMessage('Ingredients must be a string')
    .notEmpty()
    .withMessage('Ingredients are required'),
  body('type')
    .isString()
    .withMessage('Type must be a string')
    .notEmpty()
    .withMessage('Type is required'),
  handleValidationErrors,
  async (req, res) => {
    const { title, ingredients, type } = req.body;
    try {
      const id = await Recipe.createRecipe(title, ingredients, type);
      res.status(201).json({
        message: 'Recipe successfully created!',
        id,
        title,
        ingredients,
        type,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

// Mettre à jour une recette
export const updateRecipe = [
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  body('title').optional().isString().withMessage('Title must be a string'),
  body('ingredients')
    .optional()
    .isString()
    .withMessage('Ingredients must be a string'),
  body('type').optional().isString().withMessage('Type must be a string'),
  handleValidationErrors,
  async (req, res) => {
    const { id } = req.params;
    const { title, ingredients, type } = req.body;
    try {
      const affectedRows = await Recipe.updateRecipe(
        id,
        title,
        ingredients,
        type
      );
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json({ message: 'Recipe updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

// Supprimer une recette
export const deleteRecipe = [
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  handleValidationErrors,
  async (req, res) => {
    const { id } = req.params;
    try {
      const affectedRows = await Recipe.deleteRecipe(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];
