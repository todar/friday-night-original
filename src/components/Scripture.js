import React from "react";

function Scripture() {
  return (
    <section className="grey darken-3 white-text section">
      <div className="container">
        <article className="row">
          <div className="col s12 center">
            <h3 style={{ marginBottom: 0 }}>1 Corinthians 14:26</h3>
          </div>
          <div className="col s12 center">
            <p className="yellow-text accent-2 flow-text">
              "What is the outcome then, brethren? When you assemble, each one
              has a psalm, has a teaching, has a revelation, has a tongue, has
              an interpretation. Let all things be done for edification."
            </p>
            <cite className="grey-text text-lighten-2">
              New American Standard Bible
            </cite>
          </div>
        </article>
        <div className="divider"></div>
        <article className="row">
          <div className="col s12 center">
            <h3 style={{ marginBottom: 0 }}>John 13:35</h3>
          </div>
          <div className="col s12 center">
            <p className="yellow-text accent-2 flow-text">
              "By this all men will know that you are My disciples, if you have
              love for one another."
            </p>
            <cite className="grey-text text-lighten-2">
              New American Standard Bible
            </cite>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Scripture;
