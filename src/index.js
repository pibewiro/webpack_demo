import React from "react";
import reactDom from "react-dom";
import App2 from "./App2";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <App2 />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
