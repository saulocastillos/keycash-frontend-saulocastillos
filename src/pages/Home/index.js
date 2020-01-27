import React, { Component } from 'react';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';

import Property from '../../components/Property';

export default class Home extends Component {
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
                <Property item={item} />
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
