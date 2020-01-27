import styled from 'styled-components';

import { Link } from 'react-router-dom';

import media from 'styled-media-query';

export const PropertyList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  min-width: 350px;

  ${media.greaterThan('small')`
    margin: 0 auto;
  `}
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
