import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Recipe from "./recipe";

const recipeItem = {
  id: 1,
  name: "Recipe Name",
  description: "Recipe description",
};

describe("when rendered", () => {
  it("should have the recipe text", () => {
    render(
      <Router>
        <Recipe
          id={recipeItem.id}
          name={recipeItem.name}
          description={recipeItem.description}
        />
      </Router>
    );
    expect(screen.getByText("Recipe Name")).toBeInTheDocument();
    expect(screen.getByText("Recipe description")).toBeInTheDocument();
  });
});
