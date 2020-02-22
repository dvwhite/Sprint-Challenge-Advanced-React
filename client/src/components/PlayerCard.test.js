import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './PlayerCard';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


// Test that player ranking cards have name text
test ('renders the player cards', () => {
  // Arrange
  const { getByText } = render(<PlayerCard />);

  // Act
  const country = getByText(/country/i);

  // Assert
  expect(country).toBeInTheDocument();
})

// Test that player ranking cards have searches text
test ('renders the player cards', () => {
  // Arrange
  const { getByText } = render(<PlayerCard />);

  // Act
  const searches = getByText(/searches/i);

  // Assert
  expect(searches).toBeInTheDocument();
})

// Test that player ranking cards have country text
test ('renders the player cards', () => {
  // Arrange
  const { getByTestId } = render(<PlayerCard />);

  // Act
  const country = getByTestId(/name/i);

  // Assert
  expect(country).toBeInTheDocument();
})