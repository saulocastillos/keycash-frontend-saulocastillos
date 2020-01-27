import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdFavorite } from 'react-icons/md';

import media from 'styled-media-query';

export const PropertyList = styled.ul`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  list-style: none;
  min-width: 400px;

  ${media.greaterThan('small')`
    margin: 0 auto 20px;
  `}
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
