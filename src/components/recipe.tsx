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
    <>
      <header className="recipe-header">
        <h3>{name}</h3>
      </header>
      <section>
        <p>{description}</p>
        <p>
          Servings:&nbsp;
          {servings}
        </p>
        <p>
          Prep Time:&nbsp;
          {prep_time}
        </p>
        <p>
          Cooking Time:&nbsp;
          {cook_time}
        </p>
        {sprouty_pie ? <p>Official Sprouty Pie recipe</p> : ""}
        {lollys_pantry ? <p>Official Lolly&apos;s Pantry recipe</p> : ""}
      </section>
      <Button
        variant="primary"
        onClick={()=> { console.log(props); navigate(`/recipe/${id}`)}}
      >
        Edit Recipe
      </Button>
    </>
  );
}

export default Recipe;
