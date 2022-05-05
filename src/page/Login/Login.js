// Login.js --- React component for login page

// Libraries:

import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Modules:

import Message from './../../component/Message/Message';

// Code:

// Login page component
const Login = () => {
  // Instantiate field states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((store) => {
    return store.shopper;
  });

  return (
    <>
      <Container>
        <Row className='justify-content-md-center'>
          <h1>LOGIN</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <h2>Loading...</h2>}
          <Form onSubmit={() => {}}>
            <Form.Group controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Button className='my-3' type='submit' variant='primary'>
              LOGIN
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              Not a shopper yet? <Link to={'/shopper/register'}>Register</Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Login;

// Logins.js ends here
