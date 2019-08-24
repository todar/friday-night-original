import React from "react";
import homeGroup from "../resources/home-group.jpg";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "550px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeGroup})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
      }}
    >
      <div className="row">
        <h3 className="center">Friday Night</h3>
        <h1
          className="center col "
          style={{ margin: 0, padding: "2rem", border: ".4rem solid #fff" }}
        >
          Home Church
        </h1>
      </div>
    </div>
  );
}

export default Hero;
