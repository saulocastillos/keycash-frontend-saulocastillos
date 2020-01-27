import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

function Property({ match, properties = [] }) {
  const { id } = match.params;
  const item = properties.filter(item => item.id === id);
  let property = null;

  try {
    property = item[0];
    console.log(property.address);
  } catch (e) {
    console.log(e);
  }

  return (
    <Container>
      {' '}
      {property ? (
        <>
          <img src={property.images[0]} alt={`${property.images[0]}`} />
          <h1>R$ {property.price}</h1>
          <h2>Bathrooms: {property.bathrooms}</h2>
          <h2>Bedrooms: {property.bedrooms}</h2>
          <h2>Parking Spaces: {property.parkingSpaces}</h2>
          <h2>Usable Area: {property.parkingSpaces}</h2>
        </>
      ) : (
        ''
      )}
    </Container>
  );
}

export default connect(state => ({
  properties: state.properties,
}))(Property);
