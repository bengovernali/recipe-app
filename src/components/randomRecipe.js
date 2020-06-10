import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

class RandomRecipe extends Component {
  state = {
    recipeData: []
  };

  async componentDidMount() {
    const recipe = await this.getRecipe();
    this.setState({
      recipeData: recipe
    })
    console.log(this.state);
  }

  getRecipe = async () => {
    const response = 
      await fetch("https://api.spoonacular.com/recipes/random", 
        { headers: {"X-RapidAPI-Key": API_KEY}});
    console.log(await response.json());
    return response.json();
  }
  
  render() {
    return <div>Random Recipe will be generated here</div>;
  }
}

export default RandomRecipe;
