import React, { useState, useEffect } from 'react';

function UserData() {
  const [userData, setUserData] = useState(null);   // Pour stocker les données utilisateur
  const [loading, setLoading] = useState(false);    // Pour gérer l'état de chargement
  const [error, setError] = useState(null);         // Pour gérer les erreurs éventuelles

  // Fonction déclenchée par le bouton qui démarre le processus de chargement
  const fetchUserData = () => {
    setLoading(true);  // On déclenche le chargement en changeant l'état
    setError(null);    // On réinitialise l'état des erreurs
  };

  // useEffect pour surveiller l'état de chargement
  useEffect(() => {
    if (loading) {
      // Simuler un appel API avec un délai de 2 secondes
      const timer = setTimeout(() => {
        try {
          const data = { name: 'John Doe', email: 'john.doe@example.com' };
          setUserData(data);    // On met à jour les données utilisateur
          setLoading(false);    // Le chargement est terminé
        } catch (err) {
          setError('Erreur lors du chargement des données');
          setLoading(false);
        }
      }, 2000);

      // Nettoyage du timeout en cas de démontage du composant
      return () => clearTimeout(timer);
    }
  }, [loading]);  // Se déclenche seulement quand `loading` change

  return (
    <div>
      <h1>Chargement de données utilisateur</h1>

      {/* Bouton pour déclencher le chargement des données */}
      <button onClick={fetchUserData}>Charger les données</button>

      {/* Afficher un message pendant le chargement */}
      {loading && <p>Chargement des données...</p>}

      {/* Afficher les données utilisateur une fois qu'elles sont chargées */}
      {userData && !loading && (
        <div>
          <h2>Nom : {userData.name}</h2>
          <p>Email : {userData.email}</p>
        </div>
      )}

      {/* Gérer l'affichage des erreurs éventuelles */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UserData;
