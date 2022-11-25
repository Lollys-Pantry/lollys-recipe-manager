/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { RecipeItem } from "../types/data";
import "./recipe.css";

function Recipe(props: RecipeItem) {
  const {
    id,
    name,
    description,
    servings,
    prep_time,
    cook_time,
    sprouty_pie,
    lollys_pantry,
  } = props;

  const navigate = useNavigate();

  const deleteRecipe = async () => {
    // eslint-disable-next-line no-alert, no-restricted-globals
    const confirmAction = confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirmAction) {
      try {
        const response = await axios.delete(
          // DELETE /api/v1/recipes/:id(.:format)
          `http://localhost:3000/api/v1/recipes/${id}`
        );
        const { data } = response;
      } catch (error: unknown) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        window.location.reload();
      }
    }
  };

  return (
    <tr>
      <td>
        <strong>{name}</strong>
        <br />
        {description}
      </td>
      <td>
        <Button
          variant="outline-info"
          size="sm"
          onClick={() => {
            navigate(`/recipe/${id}`);
          }}
        >
          Edit Recipe
        </Button>
        <Button variant="outline-danger" size="sm" onClick={deleteRecipe}>
          Delete Recipe
        </Button>
      </td>
    </tr>
  );
}

export default Recipe;
