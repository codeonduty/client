// Footer.js --- React component for footer

// Libraries:

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Modules:

// None

// Code:

// Footer component
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          Copyright &copy; Grocery Shopping List
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

// Footer.js ends here
