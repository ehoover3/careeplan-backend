const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// Continue at 6 hours, 30 minutes, 20 seconds
// next thing to learn is query strings
// https://www.youtube.com/watch?v=Oe421EPjeBE
