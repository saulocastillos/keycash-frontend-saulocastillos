import React from 'react';

// import { Container } from './styles';

export default function Property({ match }) {
  return (
    <>
      <h1>{match.params.id}</h1>
    </>
  );
}
