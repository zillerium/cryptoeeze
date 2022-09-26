import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/coins">Coins</Link>
        </li>
        <li>
          <Link to="/coin98">Coin98</Link>
        </li>
        <li>
          <Link to="/gatnetwork">GatNetwork</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 
