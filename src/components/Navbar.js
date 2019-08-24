import React from "react";

function Navbar() {
  return (
    <nav className="grey darken-3">
      <div class="container">
        <h5
          style={{
            display: "inline",
            border: ".1rem solid #fff",
            padding: ".4rem"
          }}
          href="#"
          class=""
        >
          FH
        </h5>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
