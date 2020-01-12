import React from "react";

import Calculator from "./Calculator";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
      </header>
      <Calculator />
    </div>
  );
};

export default App;
