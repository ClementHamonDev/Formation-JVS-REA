// Form.js
import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setErrorMessage('Le champ ne peut pas être vide.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Soumettre</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Form;
