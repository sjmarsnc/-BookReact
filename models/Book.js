const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  authors: {
    type: [String],
    default: [""]
  },
  description: {
    type: String,
    trim: true
  },
  // url for books web page - unique index
  link: {
    type: String,
    default: "",
    unique: true
  },
  //url string for thumbnail image
  image: {
    type: String,
    default: ""
  }
});

const Book = mongoose.model("googlebooks", booksSchema);

module.exports = Book;
