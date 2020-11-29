import React from 'react';
import { withRouter } from 'react-router-dom';

import LoadingPropertyCard from './loading';

import { Container } from './styles';

const PropertyCard = ({ item, loading }) => {
  const SkeletonComponent =
    loading || !item ? (
      <LoadingPropertyCard />
    ) : (
      <Container>
        <li key={item}>
          <img src={item.images[0]} alt="image_property" />
          <div>
            <strong>{item.address.formattedAddress}</strong>
            <span>R$ {item.price}</span>
          </div>
        </li>
      </Container>
    );
  return SkeletonComponent;
};

export default withRouter(PropertyCard);
