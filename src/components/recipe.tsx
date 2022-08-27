import React from "react";
import { IRecipeItem } from "../types/data";
import "./recipe.css";

function Recipe(props: IRecipeItem) {
  const {
    name,
    description,
    servings,
    prepTime,
    cookTime,
    sproutyPie,
    lollysPantry,
  } = props;
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
          {prepTime}
        </p>
        <p>
          Cooking Time:&nbsp;
          {cookTime}
        </p>
        {sproutyPie ? <p>Official Sprouty Pie recipe</p> : ""}
        {lollysPantry ? <p>Official Lolly&apos;s Pantry recipe</p> : ""}
      </section>
    </>
  );
}

export default Recipe;
