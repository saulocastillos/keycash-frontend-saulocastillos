import React, { Component } from 'react';

import { connect } from 'react-redux';

import api from '../../services/api';

import { PropertyList, CardLink } from './styles';

import PropertyCard from '../../components/PropertyCard';

class Home extends Component {
  state = {
    properties: [],
  };

  async componentDidMount() {
    const { dispatch } = this.props;

    const response = await api.get('/');

    const filtered = response.data.filter(item => item.publish !== false);

    this.setState({ properties: filtered });

    dispatch({
      type: 'FILL_PROPERTIES',
      properties: filtered,
    });
  }

  render() {
    const { properties } = this.state;

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
}

export default connect(state => ({
  propertiesReducer: state.properties,
}))(Home);
