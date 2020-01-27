import styled from 'styled-components';

import { MdFavorite } from 'react-icons/md';

import media from 'styled-media-query';

export const HeartIcon = styled(MdFavorite)`
  width: 40px;
  height: 40px;
  color: #e7308a;

  ${media.greaterThan('small')`
    width: 60px;
    height: 60px;
  `}
`;
