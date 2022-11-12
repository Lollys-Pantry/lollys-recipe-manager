import React from "react";
import { render, screen } from "@testing-library/react";
import Recipe from "./recipe";

const recipeItem = {
  name: "Recipe Name",
  description: "Recipe description",
  servings: 10,
  prep_time: "10 minutes",
  cook_time: "20 minutes",
  sprouty_pie: false,
  lollys_pantry: true,
};

describe("when rendered", () => {
  it("should have the recipe text", () => {
    render(
      <Recipe
        name={recipeItem.name}
        description={recipeItem.description}
        servings={recipeItem.servings}
        prep_time={recipeItem.prep_time}
        cook_time={recipeItem.cook_time}
        sprouty_pie={recipeItem.sprouty_pie}
        lollys_pantry={recipeItem.lollys_pantry}
      />
    );
    expect(screen.getByText("Recipe Name")).toBeInTheDocument();
    expect(screen.getByText("Recipe description")).toBeInTheDocument();
    expect(screen.getByText("Servings: 10")).toBeInTheDocument();
    expect(screen.getByText("Prep Time: 10 minutes")).toBeInTheDocument();
    expect(screen.getByText("Cooking Time: 20 minutes")).toBeInTheDocument();
    expect(
      screen.getByText("Official Lolly's Pantry recipe")
    ).toBeInTheDocument();
  });
});
