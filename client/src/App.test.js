import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireEvent, render, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// App div
test('renders the App div', () => {
  // Arrange
  const { getByTestId } = render(<App />);

  // Act
  const appDiv = getByTestId(/App-div/i);

  // Assert
  expect(appDiv).toBeInTheDocument();
})

// App div
test('renders the PlayerCards or PlayerRanking div', () => {
  // Arrange
  const { getByTestId } = render(<App />);

  // Act
  const playerComponent = getByTestId(/playercomponent/i);

  // Assert
  expect(playerComponent).toBeInTheDocument();
})

// Toggle component
test('renders the Toggle components', () => {
  // Arrange
  const { getByTestId } = render(<App />);

  // Act
  const toggle = getByTestId(/toggle/i);

  // Assert
  expect(toggle).toBeInTheDocument();
})