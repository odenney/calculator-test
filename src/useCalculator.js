import { useState, useCallback } from "react";
import calculate from "./calculate";

const useCalculator = () => {
  const [display, setDisplay] = useState("");
  const [startNext, setStartNext] = useState(true);
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const appendDisplay = useCallback(
    value => {
      let current = startNext ? "" : display;

      if (value === "." && current === "") {
        setDisplay("0.");
      } else if (value !== "." || !current.includes(".")) {
        setDisplay(current + value);
      }

      setStartNext(false);
    },
    [display, startNext]
  );

  const reset = useCallback(() => {
    setDisplay("");
    setOperator(null);
    setStoredValue(null);
  }, []);

  const execute = useCallback(() => {
    if (!operator) {
      return;
    }

    let result = calculate(operator, storedValue, Number(display));

    setDisplay(String(result));
    setStoredValue(null);
    setOperator(null);
    setStartNext(true);

    return result;
  }, [storedValue, display, operator]);

  const selectOperator = useCallback(
    selection => {
      if (display === "") {
        setStoredValue(0);
        setDisplay("0");
      } else if (storedValue === null) {
        setStoredValue(Number(display));
      } else {
        setStoredValue(execute());
      }

      setOperator(selection);
      setStartNext(true);
    },
    [storedValue, execute, display]
  );

  return {
    display,
    appendDisplay,
    selectOperator,
    reset,
    execute
  };
};

export default useCalculator;
