// __tests__/text.test.js
const toUpperCase = require('../toUpperCase');

test('convertit une chaîne en majuscules', () => {
  expect(toUpperCase('hello')).toBe('HELLO');
  expect(toUpperCase('World')).toBe('WORLD');
  expect(toUpperCase('Test123')).toBe('TEST123');
});



