import React from 'react';

import { withRouter } from 'react-router-dom';

import { Container, HeartIcon } from './styles';

function Property({ item }) {
  return (
    <Container>
      {item ? (
        <li key={item.id}>
          <img src={item.images[0]} alt="property" />
          <HeartIcon />
          <div>
            <strong>{item.address.formattedAddress}</strong>
            <span>{item.price}</span>
          </div>
        </li>
      ) : (
        <li>
          <div
            style={{ width: '320px', height: '320px', background: 'gray' }}
          />
          <HeartIcon />
          <div>
            <strong>Address</strong>
            <span>Price</span>
          </div>
        </li>
      )}
    </Container>
  );
}

export default withRouter(Property);
