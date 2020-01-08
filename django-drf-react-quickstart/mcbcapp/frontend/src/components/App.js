import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Profile from "../views/ProfilePage";
import Home from "../views/HomePage";
import Header from "./Header";
import Login from "../views/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);

export default App;
