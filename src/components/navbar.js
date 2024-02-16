import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";

function NavbarComponent() {
  const logoStyle = {
    width: "80px",
    height: "40px",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img src={logo} alt="PLUTON Logo" style={logoStyle} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown" noCaret>
            <NavDropdown.Item href="/signin">Banking</NavDropdown.Item>
            <NavDropdown.Item href="/signin">Investments</NavDropdown.Item>
            <NavDropdown.Item href="/signin">Loans</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">Other</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/signin">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
