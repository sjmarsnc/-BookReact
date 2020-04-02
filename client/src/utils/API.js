import axios from "axios";

const API = () => {
  const APIkey = "AIzaSyBSpmKXCWL1pS-Od28eBjvTxuYXQNTfaKw";

  export default {
    getBooks: function(searchValue) {
      return axios.get("/api/search/:", { params: { q: query } });
    }
  };
};

export default API;
