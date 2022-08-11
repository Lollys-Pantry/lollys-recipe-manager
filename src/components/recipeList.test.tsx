import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RecipeList from "./recipeList";

describe("when rendered", () => {
  it("should have the recipe title", () => {
    render(<RecipeList />, { wrapper: MemoryRouter });
    expect(screen.getByText("Cole's Roasted Salsa")).toBeInTheDocument();
    expect(screen.getByText("Tofu Rice Bowls")).toBeInTheDocument();
  });
});
