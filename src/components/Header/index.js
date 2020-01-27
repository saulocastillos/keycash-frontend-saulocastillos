import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Favorite } from './styles';
import { HeartIcon } from '../HeartIcon/styles';

import logo from '../../assets/images/logo.svg';

function Header({ favoritesSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Keycash Properties" />
      </Link>
      <Favorite to="/favorites">
        <div>
          <strong>Favoritos</strong>
          <span>{favoritesSize} itens</span>
        </div>
        <HeartIcon />
      </Favorite>
    </Container>
  );
}

export default connect(state => ({
  favoritesSize: state.favorites.length,
}))(Header);
