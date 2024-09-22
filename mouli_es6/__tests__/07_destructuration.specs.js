const {describe, expect, test} = require('@jest/globals');

const {extractFirstTwo, extractRest, extractName, removePassword} = require("../exercices/07_destructuration");

describe('extractFirstTwo', () => {
    test('should extract the first two elements of an array', () => {
        expect(extractFirstTwo([1, 2, 3, 4, 5])).toEqual([1, 2]);
    });

    test("should not contain banned keywords", () => {
      expect(extractFirstTwo.toString()).not.toContain("slice");
      expect(extractFirstTwo.toString()).not.toContain("splice");
      expect(extractFirstTwo.toString()).not.toContain("[0]");
      expect(extractFirstTwo.toString()).not.toContain("[1]");
    })
});

describe('extractRest', () => {
    test('should extract the rest of an array', () => {
        expect(extractRest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    });

    test("should not contain banned keywords", () => {
      expect(extractRest.toString()).not.toContain("slice");
      expect(extractRest.toString()).not.toContain("splice");
      expect(extractRest.toString()).not.toContain("[0]");
      expect(extractRest.toString()).not.toContain("[1]");
    })
});

describe('extractName', () => {
    test('should extract the name from an object', () => {
        expect(extractName({name: "John"})).toEqual("John");
    });

    test("should not contain banned keywords", () => {
      expect(extractName.toString()).not.toContain(".name");
    })
});

describe('removePassword', () => {
    test('should remove the password from an object', () => {
        expect(removePassword({name: "John", password: "1234"})).toEqual({name: "John"});
    });

    test("should not contain banned keywords", () => {
      expect(removePassword.toString()).not.toContain(".password");
    })
});