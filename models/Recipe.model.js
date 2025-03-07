const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  level:{
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },
    ingredients: {type: Array},
    cuisine: {type: String, required: true},
    dishType: {
      type: String,
      enum: ['Breakfast', 'Main', 'Soup', 'Snack', 'Drink', 'Dessert']
    },
    image: {
      type: String,
      default: 'https://images.media-allrecipes.com/images/75131.jpg'
    },
    duation: {type: Number, min: 0},
    creator: {type: String},
    created: {type: Date, default: 'today'}

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
