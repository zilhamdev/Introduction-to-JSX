import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Fav Foods !</h1>
    <ul>
      <li>Suka ayam</li>
      <li>Suka kentang</li>
      <li>Suka daging</li>
      <li>Suka bayam</li>
    </ul>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(<h2>Great Food here..!!!</h2>, document.getElementById("food"));
