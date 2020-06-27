import React, { Component } from "react";

class RandomRecipe extends Component {
  state = {
    recipeData: []
  };

  async componentDidMount() {
    const recipe = await this.getRecipe();
    console.log("RECIPE IS: ", recipe);
    this.setState({
      recipeData: recipe.recipes[0]
    })
    console.log(this.state);
  }

  getRecipe = async () => {
    const response = await fetch("http://localhost:3000/random");
    console.log("RESPONSE IS: ", response);
    return response.json();
  }
  
  render() {
    return <div>Random Recipe will be generated here</div>;
  }
}

export default RandomRecipe;
