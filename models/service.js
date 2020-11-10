const mongoose = require("mongoose");
const Author = require("./author");

//schema
const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  author: Author.schema,
  genre: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 10,
  },
});

exports.Service = new mongoose.model("Service", ServiceSchema);
