import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <h3>Logo</h3>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
