import calculate from "./calculate";
import Operators from "./Operators";

describe("[function] calculate", () => {
  it("should return zero when value1 is null", () => {
    // run
    const result = calculate(Operators.Add, null, 2);

    // check
    expect(result).toBe(0);
  });

  it("should return zero when value1 is undefined", () => {
    // run
    const result = calculate(Operators.Add, undefined, 2);

    // check
    expect(result).toBe(0);
  });

  it("should return zero when value2 is null", () => {
    // run
    const result = calculate(Operators.Add, 2, null);

    // check
    expect(result).toBe(0);
  });

  it("should return zero when value2 is undefined", () => {
    // run
    const result = calculate(Operators.Add, 2, undefined);

    // check
    expect(result).toBe(0);
  });

  it("should return zero when operator is not set", () => {
    // run
    const result = calculate(null, 2, 1);

    // check
    expect(result).toBe(0);
  });

  it("should add values when operator is add", () => {
    // run
    const result = calculate(Operators.Add, 2, 1);

    // check
    expect(result).toBe(3);
  });

  it("should subtract values when operator is subtract", () => {
    // run
    const result = calculate(Operators.Subtract, 2, 1);

    // check
    expect(result).toBe(1);
  });

  it("should multiply values when operator is multiply", () => {
    // run
    const result = calculate(Operators.Multiply, 2, 3);

    // check
    expect(result).toBe(6);
  });

  it("should divide values when operator is divide", () => {
    // run
    const result = calculate(Operators.Divide, 10, 5);

    // check
    expect(result).toBe(2);
  });
});
