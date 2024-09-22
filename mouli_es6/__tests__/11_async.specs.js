const {describe, expect, test} = require('@jest/globals');
const {usingThen, usingAwait, apiResponse} = require("../exercices/11_async");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('usingThen', () => {
    test('should wait 2 seconds', async () => {
        const cb = jest.fn();
        usingThen(cb);
        expect(cb).not.toHaveBeenCalled();
        await sleep(2200);
        expect(cb).toHaveBeenCalled();
    });

    test("should not contain banned keywords", () => {
      expect(usingThen.toString()).not.toContain("async");
      expect(usingThen.toString()).not.toContain("await");
    })
});

describe('usingAwait', () => {
    test('should wait 2 seconds', async () => {
        const cb = jest.fn();
        usingAwait(cb);
        expect(cb).not.toHaveBeenCalled();
        await sleep(2200);
        expect(cb).toHaveBeenCalled();
    });

    test("should return a Promise", () => {
      expect(usingAwait()).toBeInstanceOf(Promise);
    })

    test("should not contain banned keywords", () => {
      expect(usingAwait.toString()).not.toContain("then");
    })
});

describe('apiResponse', () => {
    test('should return the body of the response', async () => {
        const response = await apiResponse("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response);
        expect(response).toEqual({
          "completed": false,
          "id": 1,
          "title": "delectus aut autem",
          "userId": 1
        });
    });
});
