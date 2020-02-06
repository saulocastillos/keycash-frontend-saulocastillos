import React from 'react';
import { connect } from 'react-redux';

import { PropertyList, CardLink } from './styles';
import PropertyCard from '../../components/PropertyCard';

function Home({ favorites = [] }) {
  return (
    <>
      {favorites.length > 0 ? (
        <PropertyList>
          {favorites.map(item => (
            <CardLink key={item.id} to={`/property/${item.id}`}>
              <PropertyCard item={item} />
            </CardLink>
          ))}
        </PropertyList>
      ) : (
        <h1>Nenhum favorito ainda :(</h1>
      )}
    </>
  );
}

export default connect(state => ({
  favorites: state.favorites,
}))(Home);
