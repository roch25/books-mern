const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema({
  book_isbn: String,
  book_name: String,
  book_author: [String],
  book_price: Number,
});

module.exports = mongoose.model("Book", Book);
