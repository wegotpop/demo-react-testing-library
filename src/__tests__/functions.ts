import { addStuff } from "../functions";

test("should add", () => {
  expect(addStuff(2, 4)).toBe(6);
});

describe("a bunch of tests", () => {
  const testCases = [
    [1, 1, 2],
    [3, 3, 6],
    [4, 4, 8],
    [5, 5, 10],
  ];

  testCases.forEach(([a, b, expected]) => {
    test(`should add ${a} and ${b}, expecting: ${expected}`, () => {
      expect(addStuff(a, b)).toBe(expected);
    });
  });
});
