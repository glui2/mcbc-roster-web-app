import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Login from "../views/LoginPage";
//import Profile from "../views/ProfilePage";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  /*<Router>
    <Header />
    <Switch>
      <Route exact path="/login">
        <Login/> 
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
  */
 <Login/>
);

export default App;
