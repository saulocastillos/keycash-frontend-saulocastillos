import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';
import PropertyCard from '../../components/PropertyCard';

function Home({ dispatch, properties = [] }) {
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/');
      const filtered = response.data.filter(item => item.publish !== false);
      dispatch({
        type: 'FILL_PROPERTIES',
        properties: filtered,
      });
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      {properties.length > 0 ? (
        <PropertyList>
          {properties.map(item => (
            <CardLink key={item.id} to={`/property/${item.id}`}>
              <PropertyCard item={item} />
            </CardLink>
          ))}
        </PropertyList>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}

export default connect(state => ({
  properties: state.properties,
}))(Home);
