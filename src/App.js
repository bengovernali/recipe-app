import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home";
import RandomRecipe from "./components/randomRecipe";
import RandomByCuisine from "./components/randomByCuisine";
import Cuisines from "./components/cuisines";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="body">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/random" component={RandomRecipe} />
          <Route path="randomByCuisine" component={RandomByCuisine} />
          <Route path="cuisines" component={Cuisines} />
        </div>
      </div>
    </Router>
  );
}

export default App;
