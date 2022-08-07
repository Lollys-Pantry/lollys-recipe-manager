import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lollys pantry link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Visit Lolly\'s Pantry/i);
  expect(linkElement).toBeInTheDocument();
});
