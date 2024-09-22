const { describe, expect } = require("@jest/globals");

const example = require("../exercices/01_gettingStarted.js");

describe("01_Example.js", () => {
  it("should return hello world", () => {
    expect(example()).toBe("hello world");
  })
  it("should not contain console.log", () => {
    expect(example.toString()).not.toContain("console.log");
  })
})