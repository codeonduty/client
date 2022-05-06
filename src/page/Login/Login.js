// Login.js --- React component for login page

// Libraries:

import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Modules:

import Message from './../../component/Message/Message';
import login from '../../store/slice/shopper/login';

// Code:

// Login page component
const Login = () => {
  // Instantiate field states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Instantiate dispatch handler
  const dispatch = useDispatch();

  // Instantiate navigation handler
  let navigate = useNavigate();

  const { error } = useSelector((store) => {
    return store.shopper;
  });

  return (
    <>
      <Container>
        <Row className='justify-content-md-center'>
          <h1>LOGIN</h1>
          {error && <Message variant='danger'>{error}</Message>}
          <Form onSubmit={() => {}}>
            <Form.Group controlId='username'>
              <Form.Control
                className='my-3'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Control
                className='my-3'
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

                const form = { username, password };

                if (username && password) {
                  dispatch(login({ form, navigate }));
                }
              }}
            >
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
