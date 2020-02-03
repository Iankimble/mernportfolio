import React from "react";

import { Navbar, Nav } from "react-bootstrap";
const links = () => (
  <div>
    <Navbar bg="" expand="lg" style={{ backgroundColor: "#006666" }}>
      <Navbar.Brand href="" style={{ color: "white" }}>
        Ian Kimble | MERN Stack Developer
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ color: "white" }}
      />
      <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
        <Nav className="ml-auto" style={{ color: "white" }}>
          <Nav.Link
            href="https://github.com/Iankimble"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Github
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/iank6/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default links;
