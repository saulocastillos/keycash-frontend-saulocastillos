import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdFavoriteBorder as Heart } from 'react-icons/md';

import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 10px auto;

  img {
    max-width: 320px;
  }

  ${media.greaterThan('small')`
    margin: 0 auto 20px;
    img {
      max-width: 1024px;
      flex-grow: stretch;
    }
  `}
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const FavoriteHeart = styled(Heart)`
  margin-top: -4rem;
  margin-bottom: 2rem;
`;
