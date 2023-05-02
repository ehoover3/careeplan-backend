const express = require("express");
const app = express();

const auth = require("./routes/auth");
const people = require("./routes/people");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use("/login", auth);
app.use("/api/people", people);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// NOTE TO ERIC: Continue at video 2

// GROUP TODO ACTIVITY

// LEVEL 1
// challenge 1:  set up edit functionality in './methods-public/javascript.html'
// challenge 2:  set up delete functionality in './methods-public/javascript.html'

// LEVEL 2
// challenge 3:  set up postman for './api/people' with a get method
// challenge 4:  set up postman for './api/people' with a post method
// challenge 5:  set up postman for './api/people/:id' with a put method
// challenge 6:  set up postman for './api/people/:id' with a delete method

// LEVEL 3
// challenge 7:  adda file named "favorites.js" in the data folder
// challenge 8:  create a variable with const named "favorites", then set it equal to this array of objects [{id: 1, name: "Accountant"}, {id: 2, name: "Engineer"}]
// challenge 9:  in this file, export the "favorites" variable

// LEVEL 4
// challenge 10:  Add a file to controllers and another file to routes, that are both named "favorites.js"
// challenge 11:  set up get, post, put, & delete routes for favorites
// challenge 12:  set up Postman for testing your get, post, put, & delete routes

// LEVEL 5 (stretch goal)
// set up front end calls to the favorite get, post, put, & delete routes using reactJS that renders results to the screen
