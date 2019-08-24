import React, { useState, useEffect } from "react";
import logo from "../resources/favicon.ico";
import M from "materialize-css";

function Navbar() {
  const [links] = useState([
    {
      title: "Girls Night",
      path: "#!"
    },
    {
      title: "Guys Night",
      path: "#!"
    },
    {
      title: "Worship Songs",
      path: "#!"
    }
  ]);

  const paths = links.map(({ title, path }) => (
    <li key={title}>
      <a href={path} alt={title}>
        {title}
      </a>
    </li>
  ));

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <nav className="grey darken-4">
        <div className="container">
          <a href="#!" className="brand-logo">
            <img style={{ marginTop: ".4rem" }} src={logo} alt="Logo" />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {paths}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {paths}
      </ul>
    </React.Fragment>
  );
}

export default Navbar;
