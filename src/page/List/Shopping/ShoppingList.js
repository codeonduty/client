// ShoppingList.js --- React component for Shopping list page

// Libraries:

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import './ShoppingList.css';
import {
  clearItems,
  removeItem as removeFromShoppingList,
  updateItem,
} from '../../../store/slice/list/shopping/shoppingList';
import checkout from '../../../store/slice/list/shopping/checkout';

// Code:

// Shopping list page component
const ShoppingList = () => {
  const { error, items } = useSelector((store) => {
    return store.shoppingList;
  });
  const { username } = useSelector((store) => {
    return store.shopper.details;
  });

  // Instantiate dispatch handler
  const dispatch = useDispatch();

  // Instantiate navigation handler
  let navigate = useNavigate();

  return (
    <>
      <Row>
        <h1>SHOPPING LIST</h1>
        {items.length === 0 ? (
          <Message variant='info'>Your shopping list is empty</Message>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Col md={8}>
              <ListGroup variant='flush'>
                {items.map((item) => (
                  <ListGroup.Item key={item.details._id}>
                    <Row>
                      <Col md={2}>
                        <Image
                          src={item.details.image}
                          alt={item.details.name}
                          fluid
                          rounded
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/item/${item.details._id}`}>
                          {item.details.name}
                        </Link>
                      </Col>
                      <Col md={2}>R{item.details.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as='select'
                          value={item.details.quantity}
                          onChange={(event) => {
                            event.preventDefault();

                            const payload = {
                              _id: item.details._id,
                              quantity: Number(event.target.value),
                            };

                            dispatch(updateItem(payload));
                          }}
                        >
                          {[...Array(item.details.stock).keys()].map((x) => (
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
                          onClick={(event) => {
                            event.preventDefault();

                            const payload = item.details._id;

                            dispatch(removeFromShoppingList(payload));
                          }}
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
                    <Row>
                      <Button
                        type='button'
                        className='btn-block'
                        disabled={items.length === 0}
                        onClick={(event) => {
                          event.preventDefault();

                          // Format payload correctly
                          const shoppingList = { username, listItems: [] };
                          for (let i = 0; i < items.length; i += 1) {
                            const item = {
                              _id: null,
                              quantity: 0,
                            };

                            item._id = items[i].details._id;
                            item.quantity = items[i].quantity;

                            shoppingList.listItems.push(item);
                          }

                          console.log(shoppingList.listItems);

                          const payload = {
                            shoppingList,
                            navigate,
                          };

                          if (items.length !== 0) {
                            dispatch(checkout(payload));
                            dispatch(clearItems());
                          }
                        }}
                      >
                        CHECKOUT
                      </Button>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default ShoppingList;

// ShoppingList.js ends here
