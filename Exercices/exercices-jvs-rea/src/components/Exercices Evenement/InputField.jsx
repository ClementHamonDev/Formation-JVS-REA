import React from 'react';

function InputField() {
    const handleChange = (e) => {
      console.log(e.target.value);
    };
  
    return (
      <div>
        <p>Entrez du texte ci-dessous :</p>
        <input type="text" onChange={handleChange} placeholder="Tapez ici" />
      </div>
    );
  }

export default InputField;