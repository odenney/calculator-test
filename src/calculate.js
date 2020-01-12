import Operators from "./Operators";

const calculate = (operator, value1, value2) => {
  if (
    value1 === null ||
    value1 === undefined ||
    value2 === null ||
    value2 === undefined
  ) {
    return 0;
  }

  switch (operator) {
    case Operators.Add:
      return value1 + value2;
    case Operators.Subtract:
      return value1 - value2;
    case Operators.Divide:
      return value1 / value2;
    case Operators.Multiply:
      return value1 * value2;
    default:
      return 0;
  }
};

export default calculate;
