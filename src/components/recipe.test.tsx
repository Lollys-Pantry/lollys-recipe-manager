import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Recipe from "./recipe";

const recipeItem = {
  id: 1,
  name: "Recipe Name",
  description: "Recipe description",
  servings: 10,
  prep_time: "10 minutes",
  cook_time: "20 minutes",
  sprouty_pie: false,
  lollys_pantry: true,
  ingredients: {},
  ingredients_attributes: {},
  nutritional_labels: {},
  nutritional_labels_attributes: {},
  cooking_steps: {},
  cooking_steps_attributes: {},
};

describe("when rendered", () => {
  it("should have the recipe text", () => {
    render(
      <Router>
        <Recipe
          id={recipeItem.id}
          name={recipeItem.name}
          description={recipeItem.description}
          servings={recipeItem.servings}
          prep_time={recipeItem.prep_time}
          cook_time={recipeItem.cook_time}
          sprouty_pie={recipeItem.sprouty_pie}
          lollys_pantry={recipeItem.lollys_pantry}
          ingredients={recipeItem.ingredients}
          ingredients_attributes={recipeItem.ingredients_attributes}
          nutritional_labels={recipeItem.nutritional_labels}
          nutritional_labels_attributes={
            recipeItem.nutritional_labels_attributes
          }
          cooking_steps={recipeItem.cooking_steps}
          cooking_steps_attributes={recipeItem.cooking_steps_attributes}
        />
      </Router>
    );
    expect(screen.getByText("Recipe Name")).toBeInTheDocument();
    expect(screen.getByText("Recipe description")).toBeInTheDocument();
  });
});
