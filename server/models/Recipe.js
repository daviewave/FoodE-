const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  recipeImageUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
