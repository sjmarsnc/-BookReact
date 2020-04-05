import axios from "axios";

export default {
  // search for books
  searchBooks: function(searchValue) {
    console.log("In searchBooks: ", searchValue);
    return axios.get("/api/search/" + searchValue);
  },
  // add a book to saved list
  saveBook: function(id) {
    return axios.post("/api/save/" + id);
  },
  // delete a book from the saved list
  deleteSavedBook: function(id) {
    return axios.delete("/api/delete/" + id);
  },
  // get all books in the saved list
  getSavedBooks: function() {
    return axios.get("/api/saved/");
  }
};
