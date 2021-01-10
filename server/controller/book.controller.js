const Book = require("../model/book.model");

function find(req, res) {
  Book.find(function (err, books) {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  });
}

function findById(req, res) {
  let id = req.params.id;
  Book.findById(id, function (err, book) {
    res.json(book);
  });
}

function update(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if (!book) res.status(404).send("data is not found");
    else book.book_isbn = req.body.book_isbn;
    book.book_author = req.body.book_author;
    book.book_name = req.body.book_name;
    book.book_price = req.body.book_price;

    book
      .save()
      .then((book) => {
        res.json("Book updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
}

function add(req, res) {
  let book = new Book(req.body);
  book
    .save()
    .then((book) => {
      res.status(200).json({ msg: "book added successfully", book });
    })
    .catch((err) => {
      res.status(400).send("adding new book failed");
    });
}

module.exports = { find, findById, update, add };
