import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1 className="title">Hola desde SASS</h1>
      <hr />
      <ul>
        <li>
          <a href="#">Google</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <hr />
      <h2>Counter: 0</h2>
      <button className="btn btn-primary">+1</button>
    </div>
  );
};

export default App;
