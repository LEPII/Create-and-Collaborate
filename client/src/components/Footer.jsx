import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../profile.css';

const Footer = () => {
  return (
    <div className="foot">
      <Navbar bg="dark" variant="dark" className="foot">
        <Navbar.Brand href="/">C & C</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="">About Us</Nav.Link>
          <Nav.Link href="">Social</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
