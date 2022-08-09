import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeList from "./recipeList";

describe("when rendered", () => {
  it("should have the recipe title", () => {
    render(<RecipeList />);
    expect(screen.getByText("Cole's Roasted Salsa")).toBeInTheDocument();
    expect(screen.getByText("Tofu Rice Bowls")).toBeInTheDocument();
  });
});
