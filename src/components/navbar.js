import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar has-background-primary" role="navigation" aria-label="main-navigation">
              <div className="navbar-brand is-large">
                  <h1 className="navbar-item title has-text-light">Recipe Roulette</h1>
              </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;