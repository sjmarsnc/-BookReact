const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const APIkey = require("./APIkey");
const path = require("path");
const mongoose = require("mongoose");
const Book = require("../models/Book");

module.exports = function (app) {
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
      .then((results) => {
        // console.log("Results: ", results.data.items);
        // let image = book.volumeInfo.imageLinks ? book.volumeInfo.images.thumbnail : "";
        let searchResults = results.data.items.map((book) => ({
          googleId: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks,
        }));
        // console.log(searchResults);
        res.json(searchResults);
      })
      .catch((err) => console.log(err));
  });

  app.get("/api/book/:id", (req, res) => {
    let searchURL =
      "https://www.googleapis.com/books/v1/volumes/" +
      req.params.id +
      "?key=" +
      APIKey.APIkey;
    axios.get(searchUrl).then((results) => {
      res.json(results.data);
    });
  });

  app.post("/api/save/", (req, res) => {
    console.log("In /api/save/ ", req.body);
    Book.create(req.body)
      .then((result) => {
        console.log(result);
        res.status(200);
      })
      .catch((err) => res.console.log(err));
  });

  app.delete("/api/delete/:id", (req, res) => {
    Book.deleteOne({
      googleId: req.params.id,
    }).then((result) => console.log(result));
  });

  app.get("/api/saved", (req, res) => {
    Book.find({}).then((results) => {
      console.log("/api/saved/ :", results);
      res.json(results);
    });
  });

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
