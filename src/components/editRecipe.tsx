import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeForm from "./recipeform";
import { RecipeItem } from "../types/data";

function EditRecipe() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const doSubmit = async (recipe: RecipeItem) => {
    try {
      // eslint-disable-no-unused-vars
      const response = await axios.put(
        `http://localhost:3000/api/v1/recipes/${recipeId}`,
        { recipe: { id: recipeId, ...recipe } }
      );
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    navigate("/");
  };
  // get recipe from api
  const [recipe, setRecipe] = useState<RecipeItem | null>(null);

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/recipes/${recipeId}`
      );
      const { data } = response;
      setRecipe(data);
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (recipe === null) {
    return null;
  }

  return <RecipeForm defaults={recipe} doSubmit={doSubmit} />;
}

export default EditRecipe;
