const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
