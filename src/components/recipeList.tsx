import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./recipe";
import RecipeForm from "./recipeform";
import { IRecipeItem } from "../types/data";
import "./recipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState<IRecipeItem[]>([]);
  const [isUpdate, setUpdate] = useState<boolean>(false);

  const getRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/recipes");
      const { data } = response;
      setRecipes(data);
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
    setUpdate(false);
  }, [isUpdate]);

  const updateRecipeList = (recipe: IRecipeItem) => {
    // eslint-disable-next-line no-underscore-dangle
    const _recipes = recipes;
    _recipes.unshift(recipe);
    setRecipes(_recipes);

    setUpdate(true);
  };

  return (
    <>
      <RecipeForm updateRecipeList={updateRecipeList} />
      <div>
        <h2>These recipes are from the api</h2>
        <ul>
          {recipes.map((recipe: IRecipeItem) => (
            <Recipe
              key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              servings={recipe.servings}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              sproutyPie={recipe.sproutyPie}
              lollysPantry={recipe.lollysPantry}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default RecipeList;
