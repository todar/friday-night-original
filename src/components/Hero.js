import React from "react";
import homeGroup from "../resources/home-group.jpg";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeGroup})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
      }}
    >
      <div className="container row">
        <div className="col s12 m6 push-m3">
          <h3 style={{ marginTop: 0 }} className="center yellow-text accent-3">
            Friday Night
          </h3>
          <h1
            className="center yellow-text accent-3"
            style={{
              margin: 0,
              padding: "1.5rem 1.5rem",
              border: ".4rem solid #ffea00"
            }}
          >
            Home Church
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
