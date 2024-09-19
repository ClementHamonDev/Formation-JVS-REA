import React from 'react';

function KeyTracker() {
    const handleKeyDown = (e) => {
      console.log(`Touche enfoncée : ${e.key}`);
    };
  
    const handleKeyUp = (e) => {
      console.log(`Touche relâchée : ${e.key}`);
    };
  
    return (
      <div>
        <p>Appuyez sur une touche pour voir les événements dans la console :</p>
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} placeholder="Tapez ici" />
      </div>
    );
  }
  
export default KeyTracker;