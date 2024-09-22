const {describe, expect, test} = require('@jest/globals');
const {countWords, sortObjectByValue} = require("../exercices/13_bonus");

describe('countWords', () => {
  it('devrait compter la fréquence des mots correctement', () => {
    const phrase = "la pomme est rouge et la banane est jaune";
    const result = countWords(phrase);

    expect(result).toEqual({
      "la": 2,
      "pomme": 1,
      "est": 2,
      "rouge": 1,
      "et": 1,
      "banane": 1,
      "jaune": 1
    });
  });

  it('devrait gérer une phrase vide', () => {
    const phrase = "";
    const result = countWords(phrase);

    expect(result).toEqual({});
  });

  it('devrait gérer des cas où la capitalisation varie', () => {
    const phrase = "La pomme est la Pomme";
    const result = countWords(phrase);

    expect(result).toEqual({
      "La": 1,
      "pomme": 1,
      "est": 1,
      "la": 1,
      "Pomme": 1
    });
  });

  it('devrait gérer des phrases avec des signes de ponctuation', () => {
    const phrase = "La pomme, la pomme!";
    const result = countWords(phrase);

    // Note: Cette assertion suppose que votre fonction ne prend pas en compte les signes de ponctuation.
    // Si vous voulez que votre fonction gère cela différemment, ajustez le test en conséquence.
    expect(result).toEqual({
      "La": 1,
      "pomme,": 1,
      "la": 1,
      "pomme!": 1
    });
  });
});

describe('sortObjectByValue', () => {

  it('devrait trier les propriétés de l’objet en fonction de leurs valeurs, en ordre croissant', () => {
    const obj = {
      "pommes": 3,
      "bananes": 1,
      "cerises": 8
    };

    const result = sortObjectByValue(obj);

    expect(result).toEqual({
      "bananes": 1,
      "pommes": 3,
      "cerises": 8
    });
  });

  it('devrait gérer un objet vide', () => {
    const obj = {};

    const result = sortObjectByValue(obj);

    expect(result).toEqual({});
  });

  it('devrait trier les propriétés avec des valeurs identiques en fonction de leurs clés', () => {
    const obj = {
      "cerises": 3,
      "bananes": 3,
      "pommes": 3
    };

    const result = sortObjectByValue(obj);

    // Si les valeurs sont les mêmes, elles doivent être triées alphabétiquement par clé
    expect(result).toEqual({
      "bananes": 3,
      "cerises": 3,
      "pommes": 3
    });
  });

  it('devrait trier les propriétés avec différentes types de valeurs', () => {
    const obj = {
      "pommes": "z",
      "bananes": "a",
      "cerises": "m"
    };

    const result = sortObjectByValue(obj);

    expect(result).toEqual({
      "bananes": "a",
      "cerises": "m",
      "pommes": "z"
    });
  });
  
  // ... ajoutez d'autres tests pertinents si nécessaire
});