import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">C & C</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#features">Contact Us</Nav.Link>
        <Nav.Link href="#pricing">Term & Conditions</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
