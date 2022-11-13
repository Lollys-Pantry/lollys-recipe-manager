/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React from "react";
import { useNavigate } from "react-router-dom";
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
      </td>
    </tr>
  );
}

export default Recipe;
