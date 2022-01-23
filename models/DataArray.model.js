// define a Schema by adding some fields 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  title : String,
  level : String,
  ingredients : [String],
  cuisine  : String,
  dishType : String,
  image : String,
  duration : Number,
  creator : String,
  created : {
    type: Date,
    default: Date.now
  }
});

// create a collection with the above schema
const xxxx = mongoose.model('nameOfTheCollection', recipeSchema);
module.exports = xxxx;
