const {describe, expect, test} = require('@jest/globals');

const ternaire = require("../exercices/02_ternaire");

describe('02_Ternaire', () => {
  it("Should return a", () => {
    expect(ternaire(3, 1)).toBe(3);
  })
  it("Should return b", () => {
    expect(ternaire(1, 5)).toBe(5);
  })
  it("Should handle equality", () => {
    expect(ternaire(3, 3)).toBe(3);
  })
  it("Should not contain if", () => {
    expect(ternaire.toString().includes("if")).toBe(false);
  })
});