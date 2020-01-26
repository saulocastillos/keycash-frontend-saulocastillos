import React from 'react';
import { Link } from 'react-router-dom';

import { MdFavorite } from 'react-icons/md';

import { Container, Favorite } from './styles';

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
        <MdFavorite size={60} color="#E7308A" />
      </Favorite>
    </Container>
  );
}
