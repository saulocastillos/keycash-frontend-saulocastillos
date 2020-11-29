import React from 'react';
import { connect } from 'react-redux';

import { PropertyList, CardLink } from './styles';
import PropertyCard from '../../components/PropertyCard';

function Home({ favorities = [] }) {
  return (
    <>
      {favorities.length > 0 ? (
        <PropertyList>
          {favorities.map(item => (
            <CardLink key={item.id} to={`/property/${item.id}`}>
              <PropertyCard item={item} />
            </CardLink>
          ))}
        </PropertyList>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Nenhum favorito ainda :(</h1>
        </div>
      )}
    </>
  );
}

export default connect(state => ({
  favorities: state.favorities,
}))(Home);
