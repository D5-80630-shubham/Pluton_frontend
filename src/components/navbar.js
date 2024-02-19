import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";

function NavbarComponent() {
  const logoStyle = {
    width: "80px",
    height: "40px",
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const id = sessionStorage.getItem("userid");
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    if (id !== null) {
      setIsAuthenticated(true);
      if (role == "ROLE_ADMIN") {
        setIsAdmin(true);
      }
    }
  }, []);

  console.log(role);
  console.log(isAdmin);

  const handleHardRefresh = () => {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("token");
    window.location.reload(true);
    toast.warn("Successfully logged out");
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
            {isAuthenticated && (
              <>
                <NavDropdown.Item href="/investments">
                  Investments
                </NavDropdown.Item>
                <NavDropdown.Item href="/loan">Loans</NavDropdown.Item>
                <NavDropdown.Item href="/banking">Banking</NavDropdown.Item>
              </>
            )}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Other</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          {isAuthenticated && (
            <>
              <Nav.Link
                as={Link}
                to={isAdmin ? "/admin/profile" : "/user/profile"}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleHardRefresh}
                style={{ color: "red" }}
              >
                Logout
              </Nav.Link>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Nav.Link as={Link} to="/signin" style={{ color: "green" }}>
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
