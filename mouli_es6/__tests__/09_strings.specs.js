const {describe, expect, test} = require('@jest/globals');
const {concat} = require("../exercices/09_strings");

describe('concat', () => {
    test('should concat the first and last name', () => {
        expect(concat("John", "Doe")).toEqual("John Doe");
    });

    test("should not contain banned keywords", () => {
      expect(concat.toString()).not.toContain("+");
      expect(concat.toString()).not.toContain(".concat");
    })
});
