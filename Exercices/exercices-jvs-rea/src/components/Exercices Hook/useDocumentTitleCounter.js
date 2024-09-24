import { useState, useEffect } from 'react';

export function useDocumentTitleCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count == 0) {
      document.title = ` Mon App`;
    } else {
      document.title = `(${count}) - Mon App`;
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
}
