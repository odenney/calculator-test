import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

describe("[Component] App", () => {
  afterEach(cleanup);

  const expectDisplayToBe = (getByTestId, value) => {
    const inputElement = getByTestId("Calculator-display");
    expect(inputElement.value).toBe(value);
  };

  it("should render with empty display", () => {
    // run
    const { getByTestId } = render(<App />);

    // check
    expectDisplayToBe(getByTestId, "");
  });

  it("should set the display to number when a number is clicked", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));

    // check
    expectDisplayToBe(getByTestId, "1");
  });

  it("should set the display to 0. when . is clicked with empty display", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("."));

    // check
    expectDisplayToBe(getByTestId, "0.");
  });

  it("should append numbers when clicked after each other", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));

    // check
    expectDisplayToBe(getByTestId, "123");
  });

  it("should clear the display when C clicked", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("C"));

    // check
    expectDisplayToBe(getByTestId, "");
  });

  it("should start inputting a new number after an operation is clicked", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));

    // check
    expectDisplayToBe(getByTestId, "25");
  });

  it("should do nothing if = clicked and no operation selected", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("="));

    // check
    expectDisplayToBe(getByTestId, "1");
  });

  it("should display the result when = is clicked for a calculation", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));

    // check
    expectDisplayToBe(getByTestId, "3");
  });

  it("should chain calculations if operation clicked multiple times", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("+"));

    // check
    expectDisplayToBe(getByTestId, "8");
  });

  it("should allow second calculation using result of first", async () => {
    // setup
    const { getByText, getByTestId } = render(<App />);

    // run
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("="));

    // check
    expectDisplayToBe(getByTestId, "12");
  });
});
