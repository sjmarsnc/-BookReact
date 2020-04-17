import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Saved from "./pages/Saved";
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
    button2onClick: () => {},
  });

  useEffect(() => {
    if (!globalState.savedLoaded) {
      API.getSavedBooks().then((response) => {});
    }
    // get saved list and store in state to enable the search bar
  }, []);

  return (
    <div className="App">
      <Router basename={"/BookReact"}>
        <GlobalContext.Provider value={globalState}>
          <Switch>
            <Route exact path={["/", "/HomePage"]} component={HomePage} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
