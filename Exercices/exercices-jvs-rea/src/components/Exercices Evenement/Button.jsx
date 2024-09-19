import React from 'react';

function Button() {
    const handleClick = () => {
      alert("Bouton cliqué !");
    };
  
    return <button style={{ maxWidth: "100px" }} onClick={handleClick}>Cliquez-moi</button>;
}

export default Button;