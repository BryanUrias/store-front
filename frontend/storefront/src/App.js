import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Nav from "./Components/Nav/Nav";
import MainPage from "../src/Components/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Nav />

            {/* <Checkout /> */}
          </Route>
          <Route path="/login">
            <Nav />
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Nav />
            <MainPage />
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
