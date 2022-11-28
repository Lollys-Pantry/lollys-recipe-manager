import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Recipe from "./recipe";

const recipeItem = {
  id: 1,
  name: "Recipe Name",
  description: "Recipe description",
  image: "test",
  servings: 10,
  prep_time: "10 minutes",
  cook_time: "20 minutes",
  sprouty_pie: false,
  lollys_pantry: true,
};

describe("when rendered", () => {
  it("should have the recipe text", () => {
    render(
      <Router>
        <Recipe
          id={recipeItem.id}
          name={recipeItem.name}
          image={recipeItem.image}
          description={recipeItem.description}
          servings={recipeItem.servings}
          prep_time={recipeItem.prep_time}
          cook_time={recipeItem.cook_time}
          sprouty_pie={recipeItem.sprouty_pie}
          lollys_pantry={recipeItem.lollys_pantry}
        />
      </Router>
    );
    expect(screen.getByText("Recipe Name")).toBeInTheDocument();
    expect(screen.getByText("Recipe description")).toBeInTheDocument();
  });
});
