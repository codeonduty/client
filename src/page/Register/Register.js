// Register.js --- React component for registration page.

// Libraries:

import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Modules:

import Message from './../../component/Message/Message';
import register from './../../store/slice/shopper/register';

// Code:

// Registration page component
const Register = () => {
  // Instantiate field states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((store) => {
    return store.shopper;
  });

  // Instantiate dispatch handler
  const dispatch = useDispatch();

  // Instantiate navigation handler
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className='justify-content-md-center'>
          <h1>REGISTER</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <h2>Loading...</h2>}
          <Form onSubmit={() => {}}>
            <Form.Group controlId='username' className='my-3'>
              <Form.Control
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email' className='my-3'>
              <Form.Control
                type='email'
                placeholder='Email'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password' className='my-3'>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Button
              className='my-3'
              type='submit'
              variant='primary'
              onClick={(event) => {
                event.preventDefault();

                const form = { username, email, password };

                if (username && email && password) {
                  dispatch(register({ form, navigate }));
                }
              }}
            >
              REGISTER
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              Already a shopper? <Link to={'/shopper/login'}>Login</Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Register;
