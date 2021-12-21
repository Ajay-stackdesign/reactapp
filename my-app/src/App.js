import React from "react";
import Header from "./Header";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";



function App() {
  return (
    <div className="App">

      <Router> 
        <Switch>
          <Route path="/chat">
            <Header backButton="/chat" />
            <h1>i am at chat page</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
