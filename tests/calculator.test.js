import { describe, expect, test } from "vitest";
import { calculate } from "../calculator.js";

describe("Calculator", () => {
  test("adds numbers", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(calculate(8, "-", 3)).toBe(5);
  });

  test("multiplies numbers", () => {
    expect(calculate(4, "*", 3)).toBe(12);
  });

  test("divides numbers", () => {
    expect(calculate(10, "/", 2)).toBe(5);
  });

  test("handles negative numbers", () => {
    expect(calculate(-2, "*", 3)).toBe(-6);
  });

  test("rejects division by zero", () => {
    expect(() => calculate(5, "/", 0))
      .toThrow("Cannot divide by zero");
  });

  test("rejects invalid operators", () => {
    expect(() => calculate(2, "%", 3))
      .toThrow("Invalid operator");
  });

  test("rejects invalid numbers", () => {
    expect(() => calculate(NaN, "+", 3))
      .toThrow("Invalid numbers");
  });
});