import React from 'react';
import { connect } from 'react-redux';

import { Container, FavoriteHeart } from './styles';

function Property({ match, dispatch, properties = [], favorites = [] }) {
  const { id } = match.params;
  const item = properties.filter(item => item.id === id);
  let property = null;

  try {
    property = item[0];
  } catch (e) {
    console.log(e);
  }

  const addToFavorite = property => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      favorite: property,
    });
  };

  return (
    <Container>
      {' '}
      {property ? (
        <>
          <img src={property.images[0]} alt={`${property.images[0]}`} />
          <FavoriteHeart
            size={50}
            color="gray"
            onClick={() => addToFavorite(property)}
          />
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
