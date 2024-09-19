import React, { useState, useEffect } from 'react';

function DocumentTitle() {
  const [title, setTitle] = useState('React Application');

  useEffect(() => {
    // Met à jour le titre du document
    document.title = title;
  }, [title]); // La mise à jour du titre s'exécute chaque fois que `title` change

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Saisir le titre du document"
      />
      <p>Titre actuel du document : {title}</p>
    </div>
  );
}

export default DocumentTitle;
