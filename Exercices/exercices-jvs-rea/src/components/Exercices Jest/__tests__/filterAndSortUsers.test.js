// __tests__/users.test.js
const filterAndSortUsers = require('../filterAndSortUsers');

test('filtre et trie les utilisateurs par âge et nom', () => {
  const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
  ];

  const result = filterAndSortUsers(users, 25);

  expect(result).toEqual([
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
  ]);
});

test('retourne une liste vide si aucun utilisateur ne correspond', () => {
  const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 20 },
  ];

  const result = filterAndSortUsers(users, 30);

  expect(result).toEqual([]);
});
