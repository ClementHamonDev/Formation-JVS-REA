const {describe, expect, test} = require('@jest/globals');

const {arrow1, arrow2} = require("../exercices/04_arrow");

describe('04_arrow', () => {
  it("arrow1 - Should return a+1", () => {
    expect(arrow1(3)).toBe(4);
  })
  it("arrow 1 - Should not contain function", () => {
    expect(arrow1.toString().includes("function")).toBe(false);
  })

  it("arrow2 - Should return a+1", () => {
    expect(arrow2(3)).toBe(4);
  })
  it("arrow2 - Should not contain function", () => {
    expect(arrow2.toString().includes("function")).toBe(false);
  })
  it("arrow2 - Should not contain return", () => {
    expect(arrow2.toString().includes("return")).toBe(false);
  })
});