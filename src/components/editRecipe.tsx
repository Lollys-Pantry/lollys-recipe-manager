import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeForm from "./recipeform";
import { RecipeItem } from "../types/data";

function removeFromArray(
  newArray: { id?: number; _destroy?: unknown }[],
  oldArray: { id?: number }[]
) {
  const newIds = newArray.map((item) => item.id);
  const oldIds = oldArray.map((item) => item.id);
  const deletedIds = oldIds.filter((id) => !newIds.includes(id));

  deletedIds.forEach((id) => {
    newArray.push({ id, _destroy: "1" });
  });
}

function removeDeletedItems(newRecipe: RecipeItem, oldRecipe: RecipeItem) {
  if (
    newRecipe.ingredients_attributes !== undefined &&
    oldRecipe.ingredients_attributes !== undefined
  ) {
    removeFromArray(
      newRecipe.ingredients_attributes,
      oldRecipe.ingredients_attributes
    );
  }
  if (
    newRecipe.nutritional_labels_attributes !== undefined &&
    oldRecipe.nutritional_labels_attributes !== undefined
  ) {
    removeFromArray(
      newRecipe.nutritional_labels_attributes,
      oldRecipe.nutritional_labels_attributes
    );
  }
  if (
    newRecipe.cooking_steps_attributes !== undefined &&
    oldRecipe.cooking_steps_attributes !== undefined
  ) {
    removeFromArray(
      newRecipe.cooking_steps_attributes,
      oldRecipe.cooking_steps_attributes
    );
  }
}
function EditRecipe() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  // get recipe from api
  const [recipe, setRecipe] = useState<RecipeItem | null>(null);
  const doSubmit = async (newRecipe: RecipeItem) => {
    if (recipe !== null) {
      removeDeletedItems(newRecipe, recipe);
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.put(
        `http://localhost:3000/api/v1/recipes/${recipeId}`,
        { recipe: { id: recipeId, ...newRecipe } }
      );
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    navigate("/");
  };

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/recipes/${recipeId}`
      );
      const { data } = response;
      data.ingredients_attributes = data.ingredients;
      data.nutritional_labels_attributes = data.nutritional_labels;
      data.cooking_steps_attributes = data.cooking_steps;
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
