import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Load from "./component/load/loading.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Load />
      </header>
    </div>
  );
}

export default App;