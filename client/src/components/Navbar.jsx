import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();
  const logout = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null).then(() => history.push('/welcome'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="foot"
    >
      <Navbar.Brand href="/">C & C</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="jobs">Gigs</Nav.Link>
          <Nav.Link href="events">Events</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown
            title=""
            className="dropleft"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">User</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
