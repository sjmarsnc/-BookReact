import axios from "axios";

export default {
  // search for books
  searchBooks: function (searchValue) {
    console.log("In searchBooks: ", searchValue);
    return axios.get("/api/search/" + searchValue);
  },
  // add a book to saved list
  saveBook: function (newbook) {
    // how to pass as "body"
    return axios.post("/api/books/", newbook);
  },
  // delete a book from the saved list
  deleteSavedBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // get all books in the saved list
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
};
