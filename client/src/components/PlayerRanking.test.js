import React from 'react';
import ReactDOM from 'react-dom';
import PlayerRanking from './PlayerRanking';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// App div
test('renders the PlayerRanking component div', () => {
  // Arrange
  const { getByTestId } = render(<PlayerRanking />);

  // Act
  const ranking = getByTestId(/PlayerRanking/i);

  // Assert
  expect(ranking).toBeInTheDocument();
})