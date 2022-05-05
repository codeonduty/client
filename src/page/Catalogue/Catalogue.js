// Catalogue.js --- React component for catalogue page

// Libraries:

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// Modules:

// Components
import ItemThumbail from '../../component/Thumbnail/Item/ItemThumbnail';
import Message from '../../component/Message/Message';

// Actions
//import fetchCatalogue from '../../action/catalogue/fetchCatalogue';

// Code:

// Catalogue page component
const Catalogue = () => {
  // Extract catalogue state from Redux store
  const { loading, error, items } = useSelector((store) => {
    return store.catalogue;
  });

  return (
    <>
      <h1>Catalogue</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {items.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <ItemThumbail item={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default Catalogue;

// Catalogue.js ends here
