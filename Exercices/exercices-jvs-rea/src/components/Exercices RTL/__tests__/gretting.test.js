// __tests__/Greeting.test.js
import { render, screen } from '@testing-library/react';
import Greeting from '../Gretting';

test('affiche un message de bienvenue avec le nom passé en prop', () => {
  // Render du composant avec la prop name
  render(<Greeting name="John" />);

  // Vérification que le texte "Bienvenue, John!" est affiché
  const message = screen.getByText(/Bienvenue, John!/i);
  expect(message).toBeInTheDocument();
});
