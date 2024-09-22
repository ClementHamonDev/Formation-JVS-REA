const {describe, expect, test} = require('@jest/globals');
const {sleep} = require("../exercices/10_promise");

describe('sleep', () => {
    test('should wait 2 seconds', async () => {
        const start = Date.now();
        await sleep();
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(2000);
    });

    test("should not contain banned keywords", () => {
      expect(sleep.toString()).not.toContain("async");
      expect(sleep.toString()).not.toContain("await");
    })
});