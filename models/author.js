const mongoose = require("mongoose");

//author schema
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 30,
  },

  age: {
    type: Number,
    min: 10,
    max: 100,
  },
});

module.exports = new mongoose.model("Author", AuthorSchema);
