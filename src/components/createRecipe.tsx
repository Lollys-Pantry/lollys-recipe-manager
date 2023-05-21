import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecipeForm from "./recipeform";
import { RecipeItem } from "../types/data";

function CreateRecipe() {
  const navigate = useNavigate();
  const doSubmit = async (recipe: RecipeItem) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(
        "http://localhost:3000/api/v1/recipes",
        { recipe }
      );
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    navigate("/");
  };

  return (
    <RecipeForm
      defaults={{
        name: "",
        description: "",
        servings: 1,
        prep_time: "",
        cook_time: "",
        sprouty_pie: false,
        lollys_pantry: false,
        ingredients_attributes: {},
        ingredients: {},
        nutritional_labels_attributes: {},
        nutritional_labels: {},
        cooking_steps: {},
        cooking_steps_attributes: {},
      }}
      doSubmit={doSubmit}
    />
  );
}

export default CreateRecipe;
