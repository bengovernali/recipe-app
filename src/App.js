import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home";
import RandomRecipe from "./components/randomRecipe";
import RandomByCuisine from "./components/randomByCuisine";
import Cuisines from "./components/cuisines";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <h1 className="title">Recipe App</h1>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/random" component={RandomRecipe} />
        <Route path="randomByCuisine" component={RandomByCuisine} />
        <Route path="cuisines" component={Cuisines} />
      </div>
    </Router>
  );
}

export default App;
