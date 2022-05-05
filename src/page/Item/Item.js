// Item.js --- React component for item page

// Libraries:

import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Modules:

import Message from '../../component/Message/Message';

// Code:

// Item page component
const Item = () => {
  // STATE ------------------------------------------------------------------ /

  const [quantity, setQuantity] = useState(1);
  const { loading, error, details } = useSelector((store) => {
    return store.item;
  });

  // ------------------------------------------------------------------------ /

  // Instantiate parameter parser
  let params = useParams();

  // Instantiate dispatch handler
  const dispatch = useDispatch();

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
                {details.stock !== 0 ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={quantity}
                          onChange={(event) => {
                            setQuantity(event.target.value);
                          }}
                        >
                          {[...Array(details.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) : (
                  ''
                )}

                <Button
                  className='px-5'
                  variant='primary'
                  type='button'
                  disabled={details.stock === 0}
                  onClick={() => {}}
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
