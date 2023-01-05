import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName: string) {
  // if you find a capital letter, in a middle of a word (even multiple times)
  // replace it with whatever you found preceded by a space
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to
        {' '}
        {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">
        Disable button
      </label>
    </div>
  );
}

export default App;
