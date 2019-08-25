import React from "react";
import daveAndKathy from "../resources/dave-and-kathy.jpg";

function About() {
  return (
    <section className="section">
      <div className="container center">
        <div className="row">
          <div className="col s12 m6">
            <img
              className="responsive-img"
              src={daveAndKathy}
              alt="Dave and Kathy"
              style={{ borderRadius: "10px", marginTop: "4.1rem" }}
            />
          </div>
          <div className="col s12 m6">
            <h2 style={{ marginTop: "2rem" }}>About Friday Night</h2>
            <p style={{ fontSize: "1.1rem" }}>
              <strong>Friday Night Home Church</strong> is just one place where
              the body of Christ assembles.
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              Therefore, we are affiliated with <strong>EVERY</strong> other
              church, denominational or non-denominational, which proclaims
              Jesus Christ as Lord, the only way to God the Father. There is{" "}
              <strong>ONE</strong> body of Christ, and we are just a small part
              of His church, united around the world.
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              We are led by the Spirit and find our communion in Jesus Christ
              (our Savior, Lord, and God) with the Father.
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              Praise be to our Triune God for redeeming us with the blood of
              Christ so we are adopted as His children. His Word is true and
              complete and we obey Him as the Spirit shows us and leads us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
