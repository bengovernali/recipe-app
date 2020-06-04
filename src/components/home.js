import React, { Component } from "react";

import questionMark from '../images/questionmark.png';
import ramen from '../images/ramen.png';

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
              <div className="tile is-parent">
                <a href="/random">
                  <div className="tile is-child box has-background-primary has-text-centered">
                    <figure class="image is-96x96 is-inline-block" >
                      <img src={questionMark} alt="question mark" />
                    </figure>
                      <p className="title has-text-light has-text-centered">Random Recipe</p>
                  </div>
                </a>
              </div>
              <div className="tile is-parent">
                <a href="/cuisines">
                  <div className="tile is-child box has-background-primary has-text-centered">
                    <figure class="image is-96x96 is-inline-block" >
                      <img src={ramen} alt="ramen" />
                    </figure>
                    <p className="title has-text-light has-text-centered">Cuisines</p>
                </div>
                </a>
                
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
