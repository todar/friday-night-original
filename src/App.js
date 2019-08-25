import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scripture from "./components/Scripture";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Scripture />
      <About />
    </React.Fragment>
  );
}

export default App;
