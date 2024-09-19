// __tests__/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('incrémente le compteur lorsque le bouton est cliqué', () => {
  // Render du composant
  render(<Counter />);

  // Vérification de l'affichage initial du compteur (0)
  const counterText = screen.getByText(/Compteur : 0/i);
  expect(counterText).toBeInTheDocument();

  // Clic sur le bouton pour incrémenter le compteur
  const button = screen.getByText(/Incrémenter/i);
  fireEvent.click(button);

  // Vérification que le compteur est maintenant à 1
  const updatedCounterText = screen.getByText(/Compteur : 1/i);
  expect(updatedCounterText).toBeInTheDocument();
});
