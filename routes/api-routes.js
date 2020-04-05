const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const APIkey = require("./APIkey");
const path = require("path");

router.get("");

router.get("/recipes", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, "i") }
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;

// routes

module.exports = function(app) {
  app.get("/api/search/:searchValue", (req, res) => {
    console.log("GET: /api/search/:searchValue   Get books from google");
    let searchURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      req.params.searchValue +
      "&key=" +
      APIkey.APIkey;
    console.log("Search URL: ", searchURL);
    axios
      .get(searchURL)
      .then(results => {
        console.log("Results: ", results.data.items);
        res.json(results.data.items);
      })
      .catch(err => console.log(err));
  });

  app.get("/api/saved/", (req, res) => {
    console.log("GET: /api/saved/  Get list of saved books");
    // API.getSaved();
  });

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
