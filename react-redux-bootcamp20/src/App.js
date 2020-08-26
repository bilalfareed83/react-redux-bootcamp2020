import React from "react";
import "./App.css";
import { Home } from "./conponents/Home";
import { Count } from "./conponents/Count";

function App() {
  return (
    <div className="App">
      <h2>React Redux</h2>
      <Count />
      <Home />
    </div>
  );
}

export default App;
