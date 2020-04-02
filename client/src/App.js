import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Router basename={"/BookReact"}>
        <Switch>
          <Route exact path={["/", "/HomePage"]} component={HomePage} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
