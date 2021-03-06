import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logout} = useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Genious car mechanic</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      { user?.email ?
  <Button onClick={logout} variant="primary">logout</Button> : 
  <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
      <Navbar.Text>
         <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
</>
    );
};

export default Header;