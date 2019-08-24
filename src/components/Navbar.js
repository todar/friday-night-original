import React, { useState, useEffect } from "react";
import logo from "../resources/favicon.ico";
import M from "materialize-css";

function Navbar() {
  // These are the links for both the navbar and sidebar.
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

  // For both sidebar and navbar have the same links. Staying DRY.
  const paths = links.map(({ title, path }) => (
    <li key={title}>
      <a href={path} alt={title}>
        {title}
      </a>
    </li>
  ));

  // On mount I want to initilize the sidebar trigger.
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
