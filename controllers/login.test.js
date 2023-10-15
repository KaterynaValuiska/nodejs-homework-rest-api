import { testLogin } from "./auth.js";

function sum(a, b) {
  return a + b;
}

describe("test login function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("{} - true", () => {
    const result = testLogin({});
    expect(result).toBe(true);
  });
});
