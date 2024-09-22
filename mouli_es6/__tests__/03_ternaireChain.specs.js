const {describe, expect, test} = require('@jest/globals');

const ternaire = require("../exercices/03_ternaireChain");

describe('03_Ternaire', () => {
  it("Should return a", () => {
    expect(ternaire(3, 1)).toBe(">");
  })
  it("Should return b", () => {
    expect(ternaire(1, 5)).toBe("<");
  })
  it("Should handle equality", () => {
    expect(ternaire(3, 3)).toBe("=");
  })
  it("Should not contain if", () => {
    expect(ternaire.toString().includes("if")).toBe(false);
  })
});