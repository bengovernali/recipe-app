import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Recipe App</h1>
      </div>
      <div className="tile-grid">
        <div className="tile">
          <h3>Random Recipe</h3>
        </div>
        <div className="tile">
          <h3>Random by Cuisine</h3>
        </div>
        <div className="tile">
          <h3>Cuisines</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
