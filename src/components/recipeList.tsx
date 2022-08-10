import React from "react";
// import {Link} from 'react-router-dom;
import "./recipeList.css";

function RecipeList() {
  const recipes: {
    id: number;
    recipeName: string;
    description: string;
    servings: number;
    prepTime: string;
    cookTime: string;
    sproutyPie: boolean;
    lollysPantry: boolean;
  }[] = [
    {
      id: 0,
      recipeName: "Cole's Roasted Salsa",
      description:
        "A delicious spicy salsa made with roasted tomatoes and serrano peppers",
      servings: 10,
      prepTime: "20 minutes",
      cookTime: "10 minutes",
      sproutyPie: false,
      lollysPantry: true,
    },
    {
      id: 1,
      recipeName: "Tofu Rice Bowls",
      description:
        "Air fried tofu sits on a bed of jasmine rice with teriyaki sauce, sesame seeds and green onion toppings.",
      servings: 4,
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      sproutyPie: true,
      lollysPantry: false,
    },
  ];

  const recipeItems = recipes.map((recipe) => (
    <li key={recipe.id}>{recipe.recipeName}</li>
  ));
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>{recipeItems}</ul>
    </div>
  );
}

export default RecipeList;
