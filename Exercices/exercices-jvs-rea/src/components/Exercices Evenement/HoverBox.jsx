import React from 'react';

function HoverBox() {
    const handleMouseOver = (e) => {
      e.target.style.color = "red";
    };

    const handleMouseLeave = (e) => {
      e.target.style.color = "";
    };
  
    return <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Survolez-moi</div>;
}

export default HoverBox;