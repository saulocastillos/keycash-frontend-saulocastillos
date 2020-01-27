import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';
import PropertyCard from '../../components/PropertyCard';

function Home({ dispatch, propertiesReducer }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let response = null;
    let filtered = null;

    async function fetchData() {
      response = await api.get('/');
      filtered = response.data.filter(item => item.publish !== false);
      setProperties(filtered);
      dispatch({
        type: 'FILL_PROPERTIES',
        properties: filtered,
      });
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      {properties !== null ? (
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
  propertiesReducer: state.properties,
}))(Home);
