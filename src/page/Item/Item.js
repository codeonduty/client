// Item.js --- React component for item page

// Libraries:

import React from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Modules:

import Message from '../../component/Message/Message';
import { addItem as addToShoppingList } from '../../store/slice/list/shopping/shoppingList';

// Code:

// Item page component
const Item = () => {
  const { error, details } = useSelector((store) => {
    return store.item;
  });

  // Instantiate dispatch handler
  const dispatch = useDispatch();

  // Instantiate navigation handler
  const navigate = useNavigate();

  return (
    <>
      {error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={details.image}
              className='my-3'
              alt={details.name}
              fluid
            />
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>In Stock</Col>
                    <Col>{details.stock}</Col>
                  </Row>
                </ListGroup.Item>
                <Button
                  className='px-5'
                  variant='primary'
                  type='button'
                  disabled={details.stock === 0}
                  onClick={(event) => {
                    event.preventDefault();

                    const shoppingListItem = {
                      details,
                      quantity: 1,
                    };

                    dispatch(addToShoppingList(shoppingListItem));

                    navigate('/shopper/list/shopping', { replace: true });
                  }}
                >
                  ADD TO LIST
                </Button>
              </ListGroup>
            </Card>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{details.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: R{details.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {details.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Item;

// Item.js ends here
