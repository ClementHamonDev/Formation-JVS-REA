import React from 'react';
import useMousePosition from './useMousePosition';  // Import du custom hook

function MouseTracker() {
  // Utiliser le custom hook pour obtenir la position de la souris
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Suivi de la position de la souris</h1>
      <p>Position de la souris : X = {x}, Y = {y}</p>
    </div>
  );
}

export default MouseTracker;
