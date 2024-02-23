/* jshint ignore:start */
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    const navbarStyle = {
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd',
        padding: '1rem',
      };

  return (
    <Navbar style={navbarStyle} expand="md">
      <Navbar.Brand className="px-4" href="#home">Sign Language translator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Translators" id="basic-nav-dropdown" style={{ transition: 'all 0.2s ease-in-out' }}>
            <NavDropdown.Item href="/asl2text">Asl to Text</NavDropdown.Item>
            <NavDropdown.Item href="/text2asl">Text to Asl</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ist2text">Isl to Text</NavDropdown.Item>
            <NavDropdown.Item href="/text2isl">Text to Isl</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;



