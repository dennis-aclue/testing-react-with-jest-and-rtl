import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Use this test to try out the testing library after a fresh REACT initializing project

test('renders learn react link, test succeed', () => {
  render(<App />); // create a virtual DOM for the test
  const linkElement = screen.getByText(/learn react/i); // from @testing library, finds case-insensitive text in the virtual DOM
  expect(linkElement).toBeInTheDocument(); // assertions, causes test to succeed or fail
});
test('renders learn react link, test will fail', () => {
  render(<App />); // create a virtual DOM for the test
  const linkElement = screen.getByText(/learn testing/i); // from @testing library, finds case-insensitive text in the virtual DOM
  expect(linkElement).toBeInTheDocument(); // assertions, causes test to succeed or fail
  // examples of other assertions
  // expect(element.textContent).toBe('Learn Testing');
  // expect(elementsArray).toHaveLength(2);
});

test('Empty test will pass', () => {
// empty test will pass
});

// find element wit anchor link instead of text
test('get by role instead of actual text', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});
