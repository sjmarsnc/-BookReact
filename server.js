const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

import API from "./routes/apiRoutes"; 
import APIkey from "./APIkey";   

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/search/:searchValue", (req, res) => { 
   console.log("GET: /api/search/:searchValue   Get books from google"); 
   axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.searchValue + "&key=" + APIkey)
     .then( return results)
     .catch( err => console.log(err));  
}

app.get("/api/saved/") { 
   console.log("GET: /api/saved/  Get list of saved books");
   API.getSaved();  
}
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
