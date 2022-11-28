import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Recipe from "./recipe";
import { RecipeItem } from "../types/data";
import "./recipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
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

  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="info"
        onClick={() => {
          navigate("/new-recipe");
        }}
      >
        Add new recipe
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe: RecipeItem) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              servings={recipe.servings}
              prep_time={recipe.prep_time}
              cook_time={recipe.cook_time}
              sprouty_pie={recipe.sprouty_pie}
              lollys_pantry={recipe.lollys_pantry}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default RecipeList;
