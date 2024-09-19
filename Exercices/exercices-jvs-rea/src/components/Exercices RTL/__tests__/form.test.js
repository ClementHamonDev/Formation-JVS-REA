// __tests__/Form.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form';

test('affiche un message d\'erreur si le champ est soumis vide', () => {
  // Render du composant Form
  render(<Form />);

  // Clic sur le bouton "Soumettre" sans remplir le champ
  const button = screen.getByText(/Soumettre/i);
  fireEvent.click(button);

  // Vérification que le message d'erreur est affiché
  const errorMessage = screen.getByText(/Le champ ne peut pas être vide/i);
  expect(errorMessage).toBeInTheDocument();
});
