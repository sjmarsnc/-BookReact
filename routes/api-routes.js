const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const APIkey = require("./APIkey");
const path = require("path");

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
        // console.log("Results: ", results.data.items);
        let searchResults = results.data.items.map(book => ({
          googleId: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          images: book.volumeInfo.imageLinks
        }));
        console.log(searchResults);
        res.json(searchResults);
      })
      .catch(err => console.log(err));
  });

  app.get("/api/saved/", (req, res) => {
    console.log("GET: /api/saved/  Get list of saved books");
  });

  app.get("/api/book/:id", (req, res) => {
    let searchURL =
      "https://www.googleapis.com/books/v1/volumes/" +
      req.params.id +
      "?key=" +
      APIKey.APIkey;
    axios.get(searchUrl).then(results => {
      res.json(results.data);
    });
  });

  app.post("/api/save/:id", (req, res) => {});

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
