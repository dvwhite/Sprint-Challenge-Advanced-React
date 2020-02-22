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

describe('renders the App div', () => {
  // Arrange
  const { getByTestId } = render(<App />)

  // Act
  const appDiv = getByTestId(/App-div/i)

  // Assert
  expect(appDiv).toBeInTheDocument();
})