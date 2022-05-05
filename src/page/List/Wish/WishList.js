// WishList.js --- React component for wishlist page

// Libraries:

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ListGroup,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

// Modules:

import Message from '../../../component/Message/Message';
import './WishList.css';

// Code:

// Wishlist page component
const WishList = () => {
  const { error, items } = useSelector((store) => {
    return store.wishList;
  });

  return (
    <>
      <Row>
        <h1>WISHLIST</h1>
        {items.length === 0 ? (
          <Message variant='info'>Your wishlist is empty</Message>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <main>
            <Col md={8}>
              <ListGroup variant='flush'>
                {items.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/item/${item._id}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>R{item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as='select'
                          value={item.quantity}
                          onChange={() => {}}
                        >
                          {[...Array(item.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='danger'
                          onClick={() => {}}
                        >
                          REMOVE
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>TOTAL FOR (0) ITEMS</h2>
                    R0
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn-block'
                      disabled={items.length === 0}
                      onClick={() => {}}
                    >
                      CHECKOUT
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </main>
        )}
      </Row>
    </>
  );
};

export default WishList;

// WishList.js ends here
