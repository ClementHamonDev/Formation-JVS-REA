const {describe, expect, test} = require('@jest/globals');

const {multiplyByTwo, filterNameStartByA, sum, findUserById} = require("../exercices/05_arrayOperations");

describe('multiplyByTwo', () => {
    test('should return an array with all values multiplied by 2', () => {
        const result = multiplyByTwo([1, 2, 3, 4, 5]);
        expect(result).toEqual([2, 4, 6, 8, 10]);
    });

    test("should return an empty array if the input array is empty", () => {
        const result = multiplyByTwo([]);
        expect(result).toEqual([]);
    });

    test("should not contain banned keywords", () => {
      expect(multiplyByTwo.toString()).not.toContain("for");
      expect(multiplyByTwo.toString()).not.toContain("while");
      expect(multiplyByTwo.toString()).not.toContain("forEach");
      expect(multiplyByTwo.toString()).not.toContain("function");
      expect(multiplyByTwo.toString()).not.toContain("return");
      expect(multiplyByTwo.toString()).not.toContain("var");
      expect(multiplyByTwo.toString()).not.toContain("let");
      expect(multiplyByTwo.toString()).not.toContain("const");
    })
});

describe('filterNameStartByA', () => {
  test("should return an array with all names starting by A", () => {
    const result = filterNameStartByA(["Alice", "Bob", "Charlie", "Alex", "Martin"]);
    expect(result).toEqual(["Alice", "Alex"]);
  })

  test("should return an empty array if the input array is empty", () => {
    const result = filterNameStartByA([]);
    expect(result).toEqual([]);
  });

  test("should not contain banned keywords", () => {
    expect(filterNameStartByA.toString()).not.toContain("for");
    expect(filterNameStartByA.toString()).not.toContain("while");
    expect(filterNameStartByA.toString()).not.toContain("forEach");
    expect(filterNameStartByA.toString()).not.toContain("function");
    expect(filterNameStartByA.toString()).not.toContain("return");
    expect(filterNameStartByA.toString()).not.toContain("var");
    expect(filterNameStartByA.toString()).not.toContain("let");
    expect(filterNameStartByA.toString()).not.toContain("const");
  })
});

describe('sum', () => {
  test("should return the sum of all values", () => {
    const result = sum([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  })

  test("should return 0 if the input array is empty", () => {
    const result = sum([]);
    expect(result).toEqual(0);
  });

  test("should not contain banned keywords", () => {
    expect(sum.toString()).not.toContain("for");
    expect(sum.toString()).not.toContain("while");
    expect(sum.toString()).not.toContain("forEach");
    expect(sum.toString()).not.toContain("function");
    expect(sum.toString()).not.toContain("return");
    expect(sum.toString()).not.toContain("var");
    expect(sum.toString()).not.toContain("let");
    expect(sum.toString()).not.toContain("const");
  });
});

describe('findUserById', () => {
  test("should return the user with the given id", () => {
    const users = [
      {id: 1, name: "Alice"},
      {id: 2, name: "Bob"},
      {id: 3, name: "Charlie"},
      {id: 4, name: "Alex"},
      {id: 5, name: "Martin"},
    ];
    const result = findUserById(users, 3);
    expect(result).toEqual("Charlie");
  });

  test("should not contain banned keywords", () => {
    expect(findUserById.toString()).not.toContain("for");
    expect(findUserById.toString()).not.toContain("while");
    expect(findUserById.toString()).not.toContain("forEach");
    expect(findUserById.toString()).not.toContain("function");
    expect(findUserById.toString()).not.toContain("return");
    expect(findUserById.toString()).not.toContain("var");
    expect(findUserById.toString()).not.toContain("let");
    expect(findUserById.toString()).not.toContain("const");
  });
});