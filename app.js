const express = require("express");
const cors = require("cors");
const app = express();
const fruits = require("./routes/fruits");

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.use(cors()); // use applies cors to every http function
app.use(express.json());
app.use("/fruits", fruits); // middleware (router) is being used here anything with that endpoint

module.exports = app;
