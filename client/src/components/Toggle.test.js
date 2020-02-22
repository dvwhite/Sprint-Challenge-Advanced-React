import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// App div
test('renders the Toggle component div', () => {
  // Arrange
  const { getByTestId } = render(<Toggle />);

  // Act
  const toggle = getByTestId(/Toggle/i);

  // Assert
  expect(toggle).toBeInTheDocument();
})