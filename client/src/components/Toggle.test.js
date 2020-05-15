import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Test toggle component
test('renders the Toggle component div', () => {
  // Arrange
  const { getByTestId } = render(<Toggle />);

  // Act
  const toggle = getByTestId(/Toggle/i);

  // Assert
  expect(toggle).toBeInTheDocument();
})

test('is clickable', () => {
  // Arrange
  const spy = jest.fn();
  const { getByTestId } = render(<Toggle />);

  // Act
  const button = getByTestId(/button/i);
  button.onclick = spy;
  fireEvent.click(button);

  // Assert
  expect(spy).toHaveBeenCalledTimes(1);
})