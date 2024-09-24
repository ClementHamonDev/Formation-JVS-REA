import { useState, useEffect } from 'react';

// Custom hook pour suivre la position de la souris
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fonction qui capture les coordonnées de la souris
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Ajouter l'écouteur d'événement pour "mousemove"
    window.addEventListener('mousemove', handleMouseMove);

    // Nettoyage lorsque le composant est démonté
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);  // Utiliser un tableau vide [] pour exécuter cet effet au montage seulement

  return position;  // Retourner les coordonnées actuelles
}

export default useMousePosition;
