import React, { Component } from "react";

class RandomRecipe extends Component {
  state = {
    recipeData: null
  };

  async componentDidMount() {
    await this.loadData();
    console.log(this.state.recipeData);
  }

  async loadData() {
    const recipe = await this.getRecipe();
    this.setState({
      recipeData: recipe.recipes[0]
    })
  }

  getRecipe = async () => {
    const response = await fetch("http://localhost:3000/random");
    return response.json();
  }
  
  render() {
    if (!this.state.recipeData) {
      return <div />
    } 
    const recipe = this.state.recipeData;
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-one-fourth"></div>
            <div className="column is-half">
              <div className="box">
                <figure className="image">
                  <img src={`${recipe.image}`} alt={`${recipe.title}`} />
                </figure>
                <br />
                <h2 className="title is-2 has-text-centered">{recipe.title}</h2>
                <hr />
                <h3 className="title is-3">Ingredients</h3>
                <div className="content">
                    <ul>
                      {recipe.extendedIngredients.map((ingredient, i) => {
                          return (
                            <li key={i}>{`${ingredient.measures.us.amount} ${ingredient.measures.us.unitShort} ${ingredient.name}`}</li>
                          )
                        })
                      }
                    </ul>  
                </div>
                <hr />
                <h3 className="title is-3">Instructions</h3>
                <div className="content">
                  <ol>
                    {recipe.analyzedInstructions[0].steps.map((instruction, i) => {
                        return (
                          <li key={i}>{`${instruction.step}`}</li>
                        )
                      })
                    }
                  </ol>
                </div>
              </div>
            </div>
          <div className="column is-one-fourth"></div>
        </div>
      </div>
    )
  }
}

export default RandomRecipe;
