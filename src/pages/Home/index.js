import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';
import PropertyCard from '../../components/PropertyCard';

const Home = ({ dispatch, properties = [] }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'ADD_ALL_TO_FAVORITIES',
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await api.get('/');
      const filtered = response.data.filter(item => item.publish !== false);
      dispatch({
        type: 'FILL_PROPERTIES',
        properties: filtered,
      });
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      {!loading && properties.length > 0 ? (
        <PropertyList>
          {properties.map(item => (
            <CardLink key={item.id} to={`/property/${item.id}`}>
              <PropertyCard item={item} />
            </CardLink>
          ))}
        </PropertyList>
      ) : (
        <PropertyList>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <PropertyCard loading={false} />
          ))}
        </PropertyList>
      )}
    </>
  );
};

export default connect(state => ({
  properties: state.properties,
  favorities: state.favorities,
}))(Home);
