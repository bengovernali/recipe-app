import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar" role="navigation" aria-label="main-navigation">
              <div className="navbar-brand">
                  <h1 className="navbar-item">Recipe Roulette</h1>
              </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;