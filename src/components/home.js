import React, { Component } from "react";

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
                  <a href="/cusines">
                    <p className="title">Cuisines</p>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
