// users.js
/**
 * Filtre les utilisateurs par âge et les trie par nom.
 * 
 * @param {Array} users - Liste d'utilisateurs, chaque utilisateur étant un objet avec `name` et `age`.
 * @param {number} minAge - Âge minimum pour filtrer les utilisateurs.
 * @returns {Array} Liste d'utilisateurs filtrés et triés.
 */
function filterAndSortUsers(users, minAge) {
    return users
      .filter(user => user.age >= minAge)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
module.exports = filterAndSortUsers;