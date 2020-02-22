import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCards from './PlayerCards';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// App div
test('renders the PlayerCards component div', () => {
  // Arrange
  const { getByTestId } = render(<PlayerCards />);

  // Act
  const Cards = getByTestId(/PlayerCards/i);

  // Assert
  expect(Cards).toBeInTheDocument();
})