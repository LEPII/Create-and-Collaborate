import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../profile.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <div className="foot">
      <Navbar bg="dark" variant="dark" className="foot">
        <Navbar.Brand href="/">C & C</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://www.instagram.com/masamessiah">
            <InstagramIcon></InstagramIcon>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/">
            <LinkedInIcon></LinkedInIcon>
          </Nav.Link>
          <Nav.Link href="https://www.Twitter.com">
            <TwitterIcon></TwitterIcon>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
