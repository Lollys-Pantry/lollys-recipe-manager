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
  } = props;

  const navigate = useNavigate();

  return (
    
        <tr>
          <td><strong>{name}</strong><br />{description}</td>
          <td><Button
                variant="outline-info"
                size="sm"
                onClick={() => {
                  navigate(`/recipe/${id}`);
                }}
      >
        Edit Recipe
      </Button></td>
        </tr>
  );
}

export default Recipe;
