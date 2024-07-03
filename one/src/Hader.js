import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
            <NavLink to="/details" className="nav-link">Details</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Image src="https://static.tnn.in/thumb/msid-109891036,thumbsize-158976,width-1280,height-720,resizemode-75/109891036.jpg" width={50} thumbnail className="d-none d-lg-block" />
      </Container>
    </Navbar>
  );
}

export default Header;
