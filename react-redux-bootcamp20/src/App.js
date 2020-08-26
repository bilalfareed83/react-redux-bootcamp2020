import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./conponents/Home";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const less = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h2>React Redux</h2>
      <br />
      {count}
      <Home add={add} less={less} />
    </div>
  );
}

export default App;
