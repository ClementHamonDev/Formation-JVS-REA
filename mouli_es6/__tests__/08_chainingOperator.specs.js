const {describe, expect, test} = require("@jest/globals");
const {getGroupName} = require("../exercices/08_chainingOperator");

describe('getGroupName', () => {
    test('should return the group name', () => {
        expect(getGroupName({name: "John", group: {name: "admin"}})).toEqual("admin");
    });

    test('should return undefined if the user has no group', () => {
        expect(getGroupName({name: "John"})).toEqual(undefined);
    });

    test("should not contain if pattern", () => {
      expect(getGroupName.toString()).not.toContain("if");
    })

    test("should not contain ternary pattern", () => {
      expect(getGroupName.toString()).not.toMatch(/.*\?.*:.*/);
    })
});