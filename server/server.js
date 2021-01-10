const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;

const bookRoutes = express.Router();

const bookController = require("./controller/book.controller.js");

app.use(cors());
app.use(bodyParser.json());

require("./model/db");

bookRoutes.route("/").get(bookController.find);
bookRoutes.route("/:id").get(bookController.findById);

bookRoutes.route("/update/:id").post(bookController.update);
bookRoutes.route("/add").post(bookController.add);

app.use("/books", bookRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
