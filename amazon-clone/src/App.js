import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Router path="/login">
          <h1>Login page</h1>
        </Router>
        {/* This is the default route */}
        <Route path="/">
          <h1>HOME PAGE!!</h1>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
