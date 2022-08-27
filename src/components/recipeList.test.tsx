import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RecipeList from "./recipeList";

// const recipes: {
//   id: number;
//   name: string;
//   description: string;
//   servings: number;
//   prepTime: string;
//   cookTime: string;
//   sproutyPie: boolean;
//   lollysPantry: boolean;
// }[] = [
//   {
//     id: 0,
//     name: "Cole's Roasted Salsa",
//     description:
//       "A delicious spicy salsa made with roasted tomatoes and serrano peppers",
//     servings: 10,
//     prepTime: "20 minutes",
//     cookTime: "10 minutes",
//     sproutyPie: false,
//     lollysPantry: true,
//   },
//   {
//     id: 1,
//     name: "Tofu Rice Bowls",
//     description:
//       "Air fried tofu sits on a bed of jasmine rice with teriyaki sauce, sesame seeds and green onion toppings.",
//     servings: 4,
//     prepTime: "10 minutes",
//     cookTime: "15 minutes",
//     sproutyPie: true,
//     lollysPantry: false,
//   },
// ];

describe("when rendered", () => {
  it("should have the recipe title", () => {
    render(<RecipeList />, { wrapper: MemoryRouter });
    expect(screen.getByText("These recipes are from the api")).toBeInTheDocument();
    // expect(screen.getByText("Tofu Rice Bowls")).toBeInTheDocument();
  });
});
