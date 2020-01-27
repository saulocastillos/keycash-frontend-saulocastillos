import React, { Component } from 'react';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';

import PropertyCard from '../../components/PropertyCard';

class Home extends Component {
  state = {
    properties: [],
  };

  async componentDidMount() {
    const response = await api.get('/');
    this.setState({ properties: response.data });
  }

  render() {
    const { properties } = this.state;

    return (
      <>
        {properties ? (
          <PropertyList>
            {properties.map(item => (
              <CardLink to={`/property/${item.id}`}>
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
}

export default Home;
