import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCards from './PlayerCards';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Test the PlayerCards component
test('renders the PlayerCards component div', () => {
  // Arrange
  const { getByTestId } = render(<PlayerCards />);

  // Act
  const cards = getByTestId(/PlayerCards/i);

  // Assert
  expect(cards).toBeInTheDocument();
})