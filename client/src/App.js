import React from "react";

import { Jumbotron, Container } from "react-bootstrap";

import mainImg from "./components/images/portfolio1.png";

import Links from "./components/links";
import Projects from "./components/projectCards";
import Skills from "./components/skills";
import Contact from "./components/contactForm";

function App() {
  return (
    <div>
      <Links />

      <Jumbotron
        fluid
        style={{
          height: "60vh",
          width: "100%",
          backgroundImage: `url(${mainImg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          marginTop: "10px"
        }}
      ></Jumbotron>
      <Container>
        <h1 style={{ fontSize: "25px", textAlign: "center" }}>
          <i>
            "The only thing more gratifying than overcoming the challenges of
            building a web application is seeing the value it provides to users"
          </i>
        </h1>
      </Container>
      <br />
      <div
        style={{
          textAlign: "center",
          marginLeft: "45px",
          marginRight: "45px",
          marginTop: "10px"
        }}
      >
        <h2>
          <u>About</u>
        </h2>
        <p>
          Hi, my name is Ian Kimble and I've been a web developer since the
          Summer of 2018. As a developer, I'm inspired to build applications
          that help people; whether it's building a tool that makes certain life
          tasks simpler, or creating resources to bring people together for a
          greater purpose- I'm driven by the idea of technology being a tool to
          assist mankind and create a better community, and ultimately a better
          world.
        </p>
        <br />
        <h2>
          <u>Portfolio</u>
        </h2>
        <Projects />
        <br />
        <h2>
          <u>Skills</u>
        </h2>
        <Skills />
        <br />
        <h2>
          <u>Contact</u>
        </h2>
        <Contact />
      </div>
    </div>
  );
}

export default App;
