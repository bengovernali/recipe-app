import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="card-grid">
        <div className="card">
          <a href="/random">
            <h3>Random Recipe</h3>
          </a>
        </div>
        <div className="card">
          <a href="/random-by-cuisine">
            <h3>Random by Cuisine</h3>
          </a>
        </div>
        <div className="card">
          <a href="/cuisines">
            <h3>Cuisines</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
