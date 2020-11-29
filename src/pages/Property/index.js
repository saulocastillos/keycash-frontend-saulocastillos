import React from 'react';
import { connect } from 'react-redux';

import { Container, FavoriteHeart, NoFavoriteHeart } from './styles';

const Property = ({ match, dispatch, properties = [], favorities = [] }) => {
  const { id } = match.params;

  let property = properties.find(i => i.id === id);

  const handleAddToFavorite = property => {
    const isOnFavorite = favorities.filter(i => i.id === property.id);

    if (isOnFavorite.length === 0) {
      dispatch({
        type: 'ADD_TO_FAVORITE',
        favorite: property,
      });
    } else {
      dispatch({
        type: 'REMOVE_FROM_FAVORITE',
        favorite: property,
      });
    }
  };

  return (
    <Container>
      {property ? (
        <>
          <img src={property.images[0]} alt={`${property.images[0]}`} />
          {favorities.find(i => i.id === property.id) ? (
            <FavoriteHeart
              size={50}
              onClick={() => handleAddToFavorite(property)}
            />
          ) : (
            <NoFavoriteHeart
              size={50}
              onClick={() => handleAddToFavorite(property)}
            />
          )}

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
};

export default connect(state => ({
  properties: state.properties,
  favorities: state.favorities,
}))(Property);
