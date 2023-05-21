import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo192.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand >
        <img src={logo} alt="Logo" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto" >
          <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
          <Nav.Link as={Link} to="/counter" exact>Counter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
