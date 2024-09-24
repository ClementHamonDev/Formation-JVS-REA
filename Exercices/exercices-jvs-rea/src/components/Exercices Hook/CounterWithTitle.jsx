import React from 'react';
import { useDocumentTitleCounter } from './useDocumentTitleCounter';

function CounterWithTitle() {
  const [count, increment] = useDocumentTitleCounter(0);

  return (
    <div>
      <h1>({count}) - Mon App</h1>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}

export default CounterWithTitle;
