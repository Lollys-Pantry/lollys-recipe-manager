import React from "react";
import { render, screen } from "@testing-library/react";
import Recipe from "./recipe";

const recipeItem = {
  name: "Recipe Name",
  description: "Recipe description",
  servings: 10,
  prepTime: "10 minutes",
  cookTime: "20 minutes",
  sproutyPie: false,
  lollysPantry: true,
}

describe("when rendered", () => {
  it("should have the recipe text", () => {
    render(<Recipe name={recipeItem.name} description={recipeItem.description} servings={recipeItem.servings} prepTime={recipeItem.prepTime} cookTime={recipeItem.cookTime} sproutyPie={recipeItem.sproutyPie} lollysPantry={recipeItem.lollysPantry} />);
    expect(screen.getByText("Recipe Name")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Recipe description"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Servings: 10")).toBeInTheDocument();
    expect(screen.getByText("Prep Time: 10 minutes")).toBeInTheDocument();
    expect(screen.getByText("Cooking Time: 20 minutes")).toBeInTheDocument();
    expect(
      screen.getByText("Official Lolly's Pantry recipe")
    ).toBeInTheDocument();
  });
});
