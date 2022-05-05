// NavBar.js --- React component for navigation bar

// Libraries:

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

// Modules:

import Bag from './../Icon/Bag/Bag';
import Wish from './../Icon/Wish/Wish';

// Code:

// Navigation bar component
const NavBar = () => {
  const { details } = useSelector((store) => {
    return store.shopper;
  });

  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top'>
      <Container>
        <LinkContainer to='/item/catalogue'>
          <Navbar.Brand>Grocery Shopping List</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/item/catalogue'>
              <Nav.Link className='mx-3'>CATALOGUE</Nav.Link>
            </LinkContainer>
            {details === null ? (
              <LinkContainer to='/shopper/login'>
                <Nav.Link className='mx-3'>LOGIN</Nav.Link>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer to='/shopper/list/shopping'>
                  <Nav.Link className='mx-3'>
                    <Bag />
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/shopper/list/wish'>
                  <Nav.Link className='mx-3'>
                    <Wish />
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/// NavBar.js end here
