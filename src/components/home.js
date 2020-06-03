import React, { Component } from "react";

import Card from "./card";

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <a href="/random">
                    <p className="title">Random Recipe</p>
                  </a>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                <p className="title">Cuisines</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
