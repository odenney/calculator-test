import React from "react";

import useCalculator from "./useCalculator";
import Operators from "./Operators";
import "./Calculator.css";

const Calculator = () => {
  const {
    display,
    appendDisplay,
    selectOperator,
    reset,
    execute
  } = useCalculator();

  return (
    <section className="Calculator">
      <input
        data-testid="Calculator-display"
        className="Calculator__display"
        readOnly
        value={display}
      />
      <div className="Calculator__controls">
        <button className="Calculator__button column-1 row-1" onClick={reset}>
          C
        </button>
        <button
          className="Calculator__button column-1 row-2"
          onClick={() => appendDisplay("7")}
        >
          7
        </button>
        <button
          className="Calculator__button column-1 row-3"
          onClick={() => appendDisplay("4")}
        >
          4
        </button>
        <button
          className="Calculator__button column-1 row-4"
          onClick={() => appendDisplay("1")}
        >
          1
        </button>
        <button
          className="Calculator__button column-2 row-2"
          onClick={() => appendDisplay("8")}
        >
          8
        </button>
        <button
          className="Calculator__button column-2 row-3"
          onClick={() => appendDisplay("5")}
        >
          5
        </button>
        <button
          className="Calculator__button column-2 row-4"
          onClick={() => appendDisplay("2")}
        >
          2
        </button>
        <button
          className="Calculator__button column-2 row-5"
          onClick={() => appendDisplay("0")}
        >
          0
        </button>
        <button
          className="Calculator__button column-3 row-2"
          onClick={() => appendDisplay("9")}
        >
          9
        </button>
        <button
          className="Calculator__button column-3 row-3"
          onClick={() => appendDisplay("6")}
        >
          6
        </button>
        <button
          className="Calculator__button column-3 row-4"
          onClick={() => appendDisplay("3")}
        >
          3
        </button>
        <button
          className="Calculator__button column-3 row-5"
          onClick={() => appendDisplay(".")}
        >
          .
        </button>
        <button
          className="Calculator__button column-4 row-1"
          onClick={() => selectOperator(Operators.Divide)}
        >
          ÷
        </button>
        <button
          className="Calculator__button column-4 row-2"
          onClick={() => selectOperator(Operators.Multiply)}
        >
          ×
        </button>
        <button
          className="Calculator__button column-4 row-3"
          onClick={() => selectOperator(Operators.Subtract)}
        >
          -
        </button>
        <button
          className="Calculator__button column-4 row-4"
          onClick={() => selectOperator(Operators.Add)}
        >
          +
        </button>
        <button
          className="Calculator__button column-4 row-5 primary"
          onClick={execute}
        >
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
