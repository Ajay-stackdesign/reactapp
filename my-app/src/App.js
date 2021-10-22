import React from "react";
import Header from "./Header";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TinderCard from "./TinderCard";


function App () {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>i am at chat page</h1>
          </Route>
          <Route path="/">
            <TinderCard />
          </Route>
        </Switch>
      </Router> 
     
    </div>
  )
}

export default App;
