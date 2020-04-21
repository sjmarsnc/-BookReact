const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
// const Book = require("../models/Book");

module.exports = function (app) {
  app.get("/api/search/:searchValue", (req, res) => {
    console.log("GET: /api/search/:searchValue   Get books from google");

    let searchURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      req.params.searchValue +
      "&key=" +
      process.env.GOOGLEAPIKEY;

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

  app.post("/api/books/", (req, res) => {
    // add a book to saved list 
    // console.log("POST /api/books/ ", req.body);
    db.Book.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.console.log(err));
  });

  app.delete("/api/books/:id", (req, res) => {
    // delete a book from the saved list 
    db.Book.deleteOne({
      googleId: req.params.id,
    }).then((result) => res.json(result));
  });

  app.get("/api/books", (req, res) => {
    // get all saved books 
    db.Book.find({}).then((results) => {
      console.log("GET /api/books/ :", results);
      res.json(results);
    });
  });

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
