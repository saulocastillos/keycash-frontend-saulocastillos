import React from 'react';

import { withRouter } from 'react-router-dom';

import { Container } from './styles';

function PropertyCard({ item }) {
  return (
    <Container>
      {item ? (
        <li key={item.id}>
          <img src={item.images[0]} alt="property" />
          <div>
            <strong>{item.address.formattedAddress}</strong>
            <span>R$ {item.price}</span>
          </div>
        </li>
      ) : (
        <li>
          <div
            style={{ width: '320px', height: '320px', background: 'gray' }}
          />
          <div>
            <strong>Address</strong>
            <span>Price</span>
          </div>
        </li>
      )}
    </Container>
  );
}

export default withRouter(PropertyCard);
