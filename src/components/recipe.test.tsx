import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipe from './recipe';

describe('when rendered', () => {
  it('should have the recipe text', () => {
    render(<Recipe />);
    expect(
      screen.getByText("Cole's Roasted Salsa"),
    ).toBeInTheDocument();
    expect(
      screen.getByText('A delicious spicy salsa made with roasted tomatoes and serrano peppers'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Servings: 10'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Prep Time: 20 minutes'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Cooking Time: 10 minutes'),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Official Lolly's Pantry recipe"),
    ).toBeInTheDocument();
  });
});
