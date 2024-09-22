const {describe, expect, test} = require('@jest/globals');

const {concat, push, merge, setName} = require("../exercices/06_composition");

describe('concat', () => {
    test("should concat two arrays", () => {
        expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    })

    test("should not contain banned keywords", () => {
      expect(concat.toString()).not.toContain(".concat");
      expect(concat.toString()).not.toContain("push");
      expect(concat.toString()).not.toContain("merge");
      expect(concat.toString()).not.toContain("for");
      expect(concat.toString()).not.toContain("while");
    })
});

describe('push', () => {
    test("should push an element to an array", () => {
        expect(push([1, 2], 3)).toEqual([1, 2, 3]);
    })

    test("should not contain banned keywords", () => {
      expect(push.toString()).not.toContain(".push");
      expect(push.toString()).not.toContain("concat");
      expect(push.toString()).not.toContain("merge");
      expect(push.toString()).not.toContain("for");
      expect(push.toString()).not.toContain("while");
    })
});

describe('merge', () => {
    test("should merge two objects", () => {
        expect(merge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
    })

    test("should not contain banned keywords", () => {
      expect(merge.toString()).not.toContain(".merge");
      expect(merge.toString()).not.toContain("concat");
      expect(merge.toString()).not.toContain("push");
      expect(merge.toString()).not.toContain("for");
      expect(merge.toString()).not.toContain("while");
    })
});

describe('setName', () => {
    test("should set the name property of an object", () => {
        expect(setName({name: "John"}, "Doe")).toEqual({name: "Doe"});
    })

    test("should not contain banned keywords", () => {
      expect(setName.toString()).not.toContain(".name");
      expect(setName.toString()).not.toContain("concat");
      expect(setName.toString()).not.toContain("push");
      expect(setName.toString()).not.toContain("merge");
      expect(setName.toString()).not.toContain("for");
      expect(setName.toString()).not.toContain("while");
    })
});
