import React from 'react';
import {render, screen, logRoles, fireEvent} from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
    // destruction container from output of render
    const {container} = render(<App/>);
    // log all the roles of the container
    // usefully for debugging on big pages
    logRoles(container);

    // find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    // expect the background color to be red
    expect(colorButton).toHaveStyle({backgroundColor: 'red'});

    // click button
    fireEvent.click(colorButton);
    // expect the background color to be blue
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
    // expect the button text to be 'Change to red'
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial condition', () => {
    render(<App/>);
    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
    render(<App/>);
    const colorButton = screen.getByRole('button');
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});

test('disabled button has gray background and reverts to red', () => {
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({backgroundColor: 'red'});

    // change button to blue
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
});

// describe statement tests for function 'replaceCamelWithSpaces'
describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });
    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});
