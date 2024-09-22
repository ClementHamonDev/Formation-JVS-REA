const {describe, expect, test} = require('@jest/globals');
const {parallel} = require("../exercices/12_parallel");
const axios = require("axios");

describe('parallel', () => {
    test("should return array of results", async () => {
      const results = await parallel();
      const expected = (await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/todos/1"),
        axios.get("https://jsonplaceholder.typicode.com/todos/2"),
        axios.get("https://jsonplaceholder.typicode.com/todos/3"),
      ])).map(response => response.data);

      expect(results).toEqual(expected);
    });
});