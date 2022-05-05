// ItemThumbnail.js --- React component for item thumbnail

// Libraries:

import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Modules:

import './ItemThumbnail.css';

// Code:

// Item thumbnail component
const ItemThumbnail = ({ item }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/item/${item._id}`}>
          <Card.Img src={item.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/item/${item._id}`}>
            <Card.Title as='div'>
              <strong>{item.name}</strong>
            </Card.Title>
          </Link>
          <Row>
            <Card.Text as='h3'>R{item.price}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemThumbnail;

// ItemThumbnail.js ends here
