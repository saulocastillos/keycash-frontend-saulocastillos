import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Favorite, HeartIcon } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Keycash Properties" />
      </Link>
      <Favorite>
        <div>
          <strong>Favoritos</strong>
          <span>3 itens</span>
        </div>
        <HeartIcon />
      </Favorite>
    </Container>
  );
}
