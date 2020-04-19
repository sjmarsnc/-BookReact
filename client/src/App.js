import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import GlobalContext from "./utils/GlobalState";
import API from "./utils/API";

function App() {
  const { searchList, searchValue, savedLoaded, savedCount } = useContext(
    GlobalContext
  );
  const [globalState, setGlobalState] = useState({
    searchValue: "",
    searchList: [],
    savedLoaded: false,
    savedCount: 0,
    savedList: [],
    button2onClick: () => { },
  });

  useEffect(() => {
    API.getSavedBooks()
      .then((response) => {
        console.log("Get getSavedBooks call: ", response.data);
        setGlobalState({
          ...globalState,
          savedCount: response.data.length,
          savedList: response.data,
        });
        console.log("Books in state: ", globalState.savedList);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (event) => {
    // search field changes, clear the search result list
    console.log("In handleSearchChange:", event.target.value);
    setGlobalState({
      ...globalState,
      searchValue: event.target.value,
    });
  };

  const handleSearchBtn = (event) => {
    console.log("Search button pushed: ", globalState.searchValue);
    API.searchBooks(globalState.searchValue)
      .then((response) => {
        console.log("response from search: ", response.data);
        setGlobalState({
          ...globalState,
          searchList: response.data,
        });
        console.log("Searched books: ", globalState.searchList);
      })
      .catch((err) => console.log(err));
  };

  const handleViewClick = (link) => {
    console.log("View button pushed: ", link);
    window.open(link, "_blank");
  };

  const handleSaveClick = (id) => {
    console.log("Save button pushed: ", id);
    var newbook = globalState.searchList.find((book) => book.googleId === id);
    console.log("newbook: ", newbook);
    API.saveBook(newbook)
      .then((response) => {
        setGlobalState({
          ...globalState,
          savedList: [...globalState.savedList, newbook],
          savedCount: globalState.savedCount + 1,
        });
      })
      .catch((err) => console.log(err));
    console.log("Saved books: ", globalState.savedList);
  };

  const handleDeleteClick = (id) => { };



  return (
    <div className="App">
      <Router basename={"/BookReact"}>
        <GlobalContext.Provider value={globalState}>
          {console.log("Saved count: ", globalState.savedCount)}
          <Nav enableSaved={globalState.savedCount === 0 ? false : true} />
          <Switch>
            <Route exact path={["/", "/HomePage"]}  >
              <HomePage
                handleSearchChange={handleSearchChange}
                handleSearchBtn={handleSearchBtn}
                handleSaveClick={handleSaveClick}
                handleViewClick={handleViewClick} />
            </Route>
            <Route exact path="/saved">
              <Saved
                handleDeleteClick={handleDeleteClick}
                handleViewClick={handleViewClick}
              />
            </Route>
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
