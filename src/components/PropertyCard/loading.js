import React from 'react';
import Skeleton from 'react-loading-skeleton'

import { Container } from './styles';

function LoadingPropertyCard() {
  return <Container>
    <li>
      <Skeleton height={240} width={320} />
      <span style={{ margin: "10px 0 5px 0" }}>
        <Skeleton height={20} width={315} />
      </span>
      <strong style={{ margin: "10px 0 20px 0" }}>
        <Skeleton height={23} width={40} />
      </strong>
    </li>
  </Container>
}

export default LoadingPropertyCard;
