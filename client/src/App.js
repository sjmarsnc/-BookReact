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
    searchLoaded: true,
    savedLoaded: false,
    savedCount: 0,
    savedList: [],
    button2onClick: () => { },
  });

  useEffect(() => {
    if (!globalState.savedLoaded) {
      API.getSavedBooks()
        .then((response) => {
          setGlobalState({
            ...globalState,
            savedLoaded: true,
            savedCount: response.data.length,
            savedList: response.data,
          });
        })
        .catch((err) => console.log(err));
    }
    if (!globalState.searchLoaded) {

      API.searchBooks(globalState.searchValue)
        .then((response) => {
          // filter out any saved books 
          var keepSearch = response.data.filter(book => isNotSaved(book.googleId));
          setGlobalState({
            ...globalState,
            searchList: keepSearch,
          });
        })
        .catch((err) => console.log(err));
    }

  }, [globalState.savedLoaded, globalState.searchLoaded]);

  const handleSearchChange = (event) => {
    // search field changes
    setGlobalState({
      ...globalState,
      searchValue: event.target.value,
    });
  };

  function isNotSaved(id) {
    if (globalState.savedList.find(book => book.googleId === id)) return false;
    return true;
  }

  const handleSearchBtn = (event) => {
    setGlobalState({
      ...globalState,
      searchLoaded: false
    });
  };

  const handleViewClick = (link) => {
    window.open(link, "_blank");
  };

  const handleSaveClick = (id) => {
    var newbook = globalState.searchList.find((book) => book.googleId === id);
    API.saveBook(newbook)
      .then((response) => {
        setGlobalState({
          ...globalState,
          savedLoaded: false,
          savedList: [...globalState.savedList, newbook],
          savedCount: globalState.savedCount + 1,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    var deleteIndex = globalState.savedList.find((book) => book.googleId === id);
    API.deleteSavedBook(id)
      .then((response) => {
        setGlobalState({
          ...globalState,
          savedLoaded: false,
          savedList: globalState.savedList.splice(deleteIndex, 1),
          savedCount: globalState.savedCount - 1
        });
      })
      .catch((err) => console.log(err));

  };


  return (
    <div className="App">
      <Router basename={"/BookReact"}>
        <GlobalContext.Provider value={globalState}>
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
